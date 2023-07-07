<template>
  <h2>Photomap test</h2>
  <div id="map" ref="mapDiv" />
</template>

<script setup lang="ts">
import { Loader } from "@googlemaps/js-api-loader"
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { createApp } from 'vue';
import {createVuetify} from "vuetify";
import PhotomapCarousel from "~/components/PhotomapCarousel.vue";

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

const vuetify = inject('vuetify')

onMounted(async () => {
    const { LatLng } = await loader.importLibrary("core")
    const { Map } = await loader.importLibrary("maps")
    const { AdvancedMarkerElement } = await loader.importLibrary("marker") as google.maps.MarkerLibrary;

    const map = new Map(mapDiv.value, {
        center: new LatLng(-34.397, 150.644),
        zoom: 8,
        mapId: 'DEMO_MAP_ID'
    });

    function createContent() {
        const content = document.createElement('div');
        const component = createApp(PhotomapCarousel, {
            'images': ['/images/stijn/stijn.jpg', '/images/stijn/paris.jpg'],
            'title': 'Test',
            onClose() {
                content.remove();
                component.unmount();
            },
        }).use(vuetify);
        component.mount(content)

        /* const images = ['/images/stijn/stijn.jpg', '/images/stijn/paris.jpg']
        images.forEach(image => {
            const itemContent = content.appendChild(document.createElement('div'));
            const itemComponent = createApp(VCarouselItem, {
                src: image,
                cover: true,
                onClose() {
                    itemContent.remove();
                    itemComponent.unmount();
                },
            }).use(vuetify);
            itemComponent.mount(itemContent)
        }) */

        return content
    }

    const markers = [
        new AdvancedMarkerElement({
          content: createContent(),
          position: new LatLng(-34.397, 150.624),
          map: map
       }),
        new AdvancedMarkerElement({
            content: createContent(),
            position: new LatLng(-34.396, 150.644),
            map: map
        }),
        new AdvancedMarkerElement({
            content: createContent(),
            position: new LatLng(-34.397, 150.264),
            map: map
        })
    ];

    const markerCluster = new MarkerClusterer({ map, markers });
})
</script>

<style>
#map {
    width: 100%;
    min-height: 500px;
}
</style>
