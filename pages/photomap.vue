<template>
  <h2>Photomap test</h2>
  <div id="map" ref="mapDiv" />
</template>

<script setup lang="ts">
import { Loader } from "@googlemaps/js-api-loader"
import { MarkerClusterer, SuperClusterAlgorithm } from "@googlemaps/markerclusterer";
import { createApp } from 'vue';
import PhotomapCarousel from "~/components/PhotomapCarousel.vue";
import { VuetifyInjectionKey } from "~/plugins/vuetify"

useHead({
  title: 'Photomap'
})

definePageMeta({
  activeMenuLink: '/projects'
})

const mapDiv = ref<HTMLDivElement | null>(null)

const loader = new Loader({
    apiKey: useRuntimeConfig().public.googleMapsApiKey,
    version: "weekly"
});

const vuetify = inject(VuetifyInjectionKey)

onMounted(async () => {
  const { LatLng } = await loader.importLibrary("core")
  const { Map } = await loader.importLibrary("maps")
  const { AdvancedMarkerElement } = await loader.importLibrary("marker") as google.maps.MarkerLibrary;

  const map = new Map(mapDiv.value!, {
    center: new LatLng(-41.20057, -72.54264),
    zoom: 10,
    mapId: 'ec253a9a328912ca'
  });

  const locations = [
    {
      location: new LatLng(-41.20057, -72.54264),
      title: 'Sendero Los Pilleyos',
      photos: [{
        filename: 'lospilleyos.jpg',
        date: '2023-04-07'
      }]
    },
    {
      location: new LatLng(-41.1153,-72.5184),
      title: 'Volcán Osorno',
      photos: [
        {filename: 'osorno1.jpg', date: '2023-04-07'},
        {filename: 'osorno2.jpg', date: '2023-04-07'},
        {filename: 'osorno3.jpg', date: '2023-04-07'},
        {filename: 'osorno4.jpg', date: '2023-04-07'},
        {filename: 'osorno5.jpg', date: '2023-04-07'}
      ]
    },
    {
      location: new LatLng(-41.12669, -72.51906),
      title: 'Volcán Osorno: Cráter Rojo',
      photos: [
        {filename: 'craterrojo1.jpg', date: '2023-04-07'},
        {filename: 'craterrojo2.jpg', date: '2023-04-07'},
        {filename: 'craterrojo3.jpg', date: '2023-04-07'},
        {filename: 'craterrojo4.jpg', date: '2023-04-07'},
        {filename: 'craterrojo5.jpg', date: '2023-04-07'},
        {filename: 'craterrojo6.jpg', date: '2023-04-07'}
      ]
    },
  ]

  function createContent(title , photos) {
      const content = document.createElement('div');
      const component = createApp(PhotomapCarousel, {
          'images': photos.map(photo => photo.filename),
          'title': title,
          onClose() {
              content.remove();
              component.unmount();
          },
      }).use(vuetify);
      component.mount(content)

      return content
  }

  const markers = locations.map(({location, title, photos}) => {
    return new AdvancedMarkerElement({
      content: createContent(title, photos),
      position: location,
      map: map
    })
  })

  const clusterAlgorithm = new SuperClusterAlgorithm({ radius: 160})
  const markerCluster = new MarkerClusterer({ map, markers, algorithm: clusterAlgorithm });
})
</script>

<style>
#map {
    width: 100%;
    min-height: 500px;
}
</style>
