<template>
  <h2>My hikes in Switzerland</h2>

  <p>An overview of my hikes (and via ferrata, fell running, mountaineering, ski tours and snow shoe tours) in Switzerland since 2013.</p>

  <p>This visualisation is fairly complete, but excludes all trips on my "Hausberg" (the Uetliberg), since I have been there way too often.</p>

  <p>Last update: {{data.lastUpdate}}.</p>

  <p><nuxt-link to="https://map.geo.admin.ch/?topic=ech&lang=en&bgLayer=ch.swisstopo.pixelkarte-farbe&layers=ch.swisstopo.zeitreihen,ch.bfs.gebaeude_wohnungs_register,ch.bav.haltestellen-oev,ch.swisstopo.swisstlm3d-wanderwege,KML%7C%7Chttp:%2F%2Fstijnvermeeren.be%2Ffiles%2Fswisshikes%2F2013.kml,KML%7C%7Chttp:%2F%2Fstijnvermeeren.be%2Ffiles%2Fswisshikes%2F2014.kml,KML%7C%7Chttp:%2F%2Fstijnvermeeren.be%2Ffiles%2Fswisshikes%2F2015.kml,KML%7C%7Chttp:%2F%2Fstijnvermeeren.be%2Ffiles%2Fswisshikes%2F2016.kml,KML%7C%7Chttp:%2F%2Fstijnvermeeren.be%2Ffiles%2Fswisshikes%2F2017.kml,KML%7C%7Chttp:%2F%2Fstijnvermeeren.be%2Ffiles%2Fswisshikes%2F2018.kml,KML%7C%7Chttp:%2F%2Fstijnvermeeren.be%2Ffiles%2Fswisshikes%2F2019.kml,KML%7C%7Chttp:%2F%2Fstijnvermeeren.be%2Ffiles%2Fswisshikes%2F2020.kml,KML%7C%7Chttp:%2F%2Fstijnvermeeren.be%2Ffiles%2Fswisshikes%2F2021.kml,KML%7C%7Chttp:%2F%2Fstijnvermeeren.be%2Ffiles%2Fswisshikes%2F2022.kml&layers_visibility=false,false,false,false,true,true,true,true,true&layers_timestamp=18641231,,,,,,,,&X=193959.31&Y=718914.62&zoom=2">View on map.geo.admin.ch</nuxt-link> for more map options.</p>

  <iframe src="https://map.geo.admin.ch/embed.html?topic=ech&lang=en&bgLayer=ch.swisstopo.pixelkarte-farbe&layers=ch.swisstopo.zeitreihen,ch.bfs.gebaeude_wohnungs_register,ch.bav.haltestellen-oev,ch.swisstopo.swisstlm3d-wanderwege,KML%7C%7Chttp:%2F%2Fstijnvermeeren.be%2Ffiles%2Fswisshikes%2F2013.kml,KML%7C%7Chttp:%2F%2Fstijnvermeeren.be%2Ffiles%2Fswisshikes%2F2014.kml,KML%7C%7Chttp:%2F%2Fstijnvermeeren.be%2Ffiles%2Fswisshikes%2F2015.kml,KML%7C%7Chttp:%2F%2Fstijnvermeeren.be%2Ffiles%2Fswisshikes%2F2016.kml,KML%7C%7Chttp:%2F%2Fstijnvermeeren.be%2Ffiles%2Fswisshikes%2F2017.kml,KML%7C%7Chttp:%2F%2Fstijnvermeeren.be%2Ffiles%2Fswisshikes%2F2018.kml,KML%7C%7Chttp:%2F%2Fstijnvermeeren.be%2Ffiles%2Fswisshikes%2F2019.kml,KML%7C%7Chttp:%2F%2Fstijnvermeeren.be%2Ffiles%2Fswisshikes%2F2020.kml,KML%7C%7Chttp:%2F%2Fstijnvermeeren.be%2Ffiles%2Fswisshikes%2F2021.kml,KML%7C%7Chttp:%2F%2Fstijnvermeeren.be%2Ffiles%2Fswisshikes%2F2022.kml&layers_visibility=false,false,false,false,true,true,true,true,true&layers_timestamp=18641231,,,,,,,,&X=178499.31&Y=668104.62&zoom=1" width="100%" height="600" frameborder='0' style="border:0"></iframe>
</template>

<script setup>
import {useApiFetch} from "../composables/useApiFetch";

useHead({
  title: 'My hikes in Switzerland'
})

definePageMeta({
  activeMenuLink: '/projects'
})

const { data } = await useApiFetch('/projects/swisshikes-api');
</script>
