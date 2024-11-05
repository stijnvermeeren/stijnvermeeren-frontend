<template>
  <h2>My hikes in Switzerland</h2>

  <p>An overview of my hikes (and via ferrata, fell running, mountaineering, ski tours and snow shoe tours) in Switzerland since 2013.</p>
  <p>Short local trips (short runs, Uetliberg explorations) are excluded.</p>

  <v-alert title="Warning / disclaimer" type="warning" density="compact" variant="outlined">
    These tracks are provided without any warranty about their accuracy, correctness or level of difficulty. Some routes might currently be subject to temporary or permanent trail closures, involve exposure to alpine risks (avalanches, rock falls, crevasses...) and/or require specialist mountaineering skills and equipment. Never follow a GPS track without proper planning, taking into account your own skills, experience and gear, the current conditions, the weather forecast, etc. Always consult online resources such as <a href="https://www.sac-cas.ch/de/huetten-und-touren/sac-tourenportal/">the SAC Tourenportal</a>, <a href="https://www.gipfelbuch.ch/">Gipfelbuch</a>, <a href="https://www.hikr.org/">Hikr</a>, <a href="https://map.geo.admin.ch/">map.geo.admin.ch</a>, <a href="https://map.wanderland.ch/">SchweizMobil</a>, <a href="https://whiterisk.ch/">WhiteRisk</a> and <a href="https://www.skitourenguru.ch/">Skitourenguru</a>, and contact local tourist offices or mountain huts where applicable.
  </v-alert>

  <p v-if="dateString">Latest hike included on the map: {{dateString}}.</p>

  <p><nuxt-link :to="`https://map.geo.admin.ch/${urlParams}`">View on map.geo.admin.ch</nuxt-link> for more map options.</p>

  <iframe :src="`https://map.geo.admin.ch/embed.html${urlParams}`" width="100%" height="600" frameborder='0' style="border:0"></iframe>
</template>

<script setup lang="ts">
useHead({
  title: 'My hikes in Switzerland'
})

definePageMeta({
  activeMenuLink: '/projects'
})

interface ResponseType {
    files: Array<string>,
    latestDate: string
}
const { data } = await useFetch<ResponseType>('https://swisshikes-kml-f28ddd4.s3.eu-central-1.amazonaws.com/metadata.json');

const bucketUrl = "https://swisshikes-kml-f28ddd4.s3.eu-central-1.amazonaws.com/"

const urlParams = computed(() => {
  const joined = (data.value?.files ?? []).map(file => encodeURIComponent(`KML|${bucketUrl}${file}`)).join(";")
  return `?topic=ech&lang=en&bgLayer=ch.swisstopo.pixelkarte-farbe&layers=ch.swisstopo.swisstlm3d-wanderwege,,0.3;${joined}&layers_visibility=false,false,false&layers_timestamp=18641231,,,,,,,,&X=178499.31&Y=668104.62&zoom=1`
})

const nth = function(d: string): string {
  const dString = String(d);
  const last = +dString.slice(-2);
  if (last > 3 && last < 21) return 'th';
  switch (last % 10) {
    case 1:  return "st";
    case 2:  return "nd";
    case 3:  return "rd";
    default: return "th";
  }
}

const dateString = computed(() => {
  const latestDate = data.value?.latestDate
  if (!!latestDate) {
      let d = new Date(latestDate);
      let day = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(d);
      let month = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
      let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
      return `${day}${nth(day)} of ${month} ${year}`
  }
})
</script>
