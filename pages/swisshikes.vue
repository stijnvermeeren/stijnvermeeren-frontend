<template>
  <h2>My hikes in Switzerland</h2>

  <p>An overview of my hikes (and via ferrata, fell running, mountaineering, ski tours and snow shoe tours) in Switzerland since 2013.</p>

  <p>This visualisation is fairly complete, but excludes all trips on my "Hausberg" (the Uetliberg), since I have been there way too often.</p>

  <p>Latest hike included on the map: {{dateString}}.</p>

  <p><nuxt-link :to="`https://map.geo.admin.ch/${urlParams}`">View on map.geo.admin.ch</nuxt-link> for more map options.</p>

  <iframe :src="`https://map.geo.admin.ch/embed.html${urlParams}`" width="100%" height="600" frameborder='0' style="border:0"></iframe>
</template>

<script setup>
useHead({
  title: 'My hikes in Switzerland'
})

definePageMeta({
  activeMenuLink: '/projects'
})

const { data } = await useFetch('https://swisshikes-kml-f28ddd4.s3.eu-central-1.amazonaws.com/metadata.json');

const bucketUrl = "https://swisshikes-kml-f28ddd4.s3.eu-central-1.amazonaws.com/"

const urlParams = computed(() => {
  const joined = data.value.files.map(file => encodeURIComponent(`KML||${bucketUrl}${file}`)).join(",")
  return `?topic=ech&lang=en&bgLayer=ch.swisstopo.pixelkarte-farbe&layers=ch.swisstopo.zeitreihen,ch.bav.haltestellen-oev,ch.swisstopo.swisstlm3d-wanderwege,${joined}&layers_visibility=false,false,false&layers_timestamp=18641231,,,,,,,,&X=178499.31&Y=668104.62&zoom=1`
})

const nth = function(d) {
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
  let d = new Date(data.value.latestDate);
  let day = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(d);
  let month = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
  let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
  return `${day}${nth(day)} of ${month} ${year}`
})
</script>
