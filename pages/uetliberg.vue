<template>
  <h2>Trampelpfade am Uetliberg</h2>

  <p>The Uetliberg (the 870m tall hill rising above Zürich) is full of fascinating and sometimes surprisingly challenging unofficial hiking trails ("Trampelpfade"). Documenting these has been the masterwork of <nuxt-link to="http://www.hikr.org/user/Uto869/">Martin "Uto869"</nuxt-link> on Hikr. Inspired by his work, I have made an interactive map of all of his routes and even some additional trails. (<nuxt-link to="http://www.hikr.org/post115832.html">Announcement on Hikr</nuxt-link>)</p>

  <p>The Uetliberg is constantly changing. Old paths become overgrown, new trails appear, or existing trails are temporarily closed for forestry works. I try to keep this map up to date, but I cannot give any guarantees about its accuracy. If you have any corrections for the map, then <nuxt-link to="contact">please let me know</nuxt-link>!</p>

  <h3>Legend</h3>
  <ul class="uetlibergLegend">
    <li>
      <img src="/images/uetliberg/weg.png" alt="Hiking Path">
      Often used hiking path, usually well-maintained, sometimes with signposts and/or waymarks. T1-T2<br />
      <em>Häufig begangener Weg, meist gut unterhalten, manchmal mit Wegweiser oder Markierungen. T1-T2</em>
    </li>
    <li>
      <img src="/images/uetliberg/pfad.png" alt="Trail">
      Clearly visible trail. T2-T3<br />
      <em>Durchgehend sichtbarer Pfad. T2-T3</em>
    </li>
    <li>
      <img src="/images/uetliberg/pfad_spur.png" alt="Vague Trail">
      Partially only a vague trail or pathless. T2-T3<br />
      <em>Teilweise nur Pfadspuren oder weglos. T2-T3</em>
    </li>
    <li>
      <img src="/images/uetliberg/alpin.png" alt="Alpine Trail">
      Clearly visible trail. Difficult terrain requiring alpine skills. T4-T5<br />
      <em>Durchgehend sichtbarer Pfad. Erfahrung in anspruchvolles, alpines Gelände vorausgesetzt. T4-T5</em>
    </li>
    <li>
      <img src="/images/uetliberg/alpin_spur.png" alt="Vague Alpine Trail">
      Partially only a vague trail or pathless. Difficult terrain requiring alpine skills. T4-T5<br />
      <em>Teilweise nur Pfadspuren oder weglos. Erfahrung in anspruchvolles, alpines Gelände vorausgesetzt. T4-T5</em>
    </li>
    <li>
      <img src="/images/uetliberg/bike.png" alt="Official Mountainbike Trail">
      Official mountainbike trail. Best avoided by hikers.<br />
      <em>Offizieller Biketrail. Nicht geeignet für Wanderer.</em>
    </li>
    <li>
      <img src="/images/uetliberg/bike_unofficial.png" alt="Illegal Mountainbike Trail">
      Trail often illegally used by mountainbikers. Not ideal for hiking.<br />
      <em>Weg geprägt von illegaler Benutzung durch Bikers. Nicht ideal für Wanderer.</em>
    </li>
    <li>
      <img src="/images/uetliberg/uto869.png" alt="Route described by Uto869 on Hikr">
      Route documented by Uto869. Click for a link to the description on Hikr.<br />
      <em>Trampfelpfad von Uto869 dokumentiert. Klicke für einen Link zur Beschreibung auf Hikr.</em>
    </li>
  </ul>

  <p><nuxt-link to="https://map.geo.admin.ch/#/map?lang=en&center=2680271.7,1244290.14&z=6&topic=ech&layers=ch.swisstopo.zeitreihen@year=1864,f;ch.bfs.gebaeude_wohnungs_register,f;ch.bav.haltestellen-oev,f;ch.swisstopo.swisstlm3d-wanderwege;KML%7Chttp://stijnvermeeren.be/files/uetliberg/trampelpfade2.kml;KML%7Chttps://stijnvermeeren.be/files/uetliberg/uto869.kml&bgLayer=ch.swisstopo.pixelkarte-farbe">View on map.geo.admin.ch</nuxt-link> for more map options. Don't forget to try out the 3D mode!</p>

  <iframe src="https://map.geo.admin.ch/#/map?lang=en&center=2680271.7,1244290.14&z=6&topic=ech&layers=ch.swisstopo.zeitreihen@year=1864,f;ch.bfs.gebaeude_wohnungs_register,f;ch.bav.haltestellen-oev,f;ch.swisstopo.swisstlm3d-wanderwege;KML%7Chttp://stijnvermeeren.be/files/uetliberg/trampelpfade2.kml;KML%7Chttps://stijnvermeeren.be/files/uetliberg/uto869.kml&bgLayer=ch.swisstopo.pixelkarte-farbe" width="100%" height="600" style="border:0"></iframe>
</template>

<script setup lang="ts">
useMeta({
  title: 'Trampelpfade am Uetliberg',
  description: 'An interactive map of the many fascinating and sometimes surprisingly challenging trails ("Trampelpfade") on the Uetliberg, the 870m tall hill rising above Zürich. Inspired by the detailed documentation of these trails by Martin "Uto869" on Hikr.',
  image: '/images/uetliberg/og_image.png'
})

definePageMeta({
  activeMenuLink: '/projects'
})
</script>

<style scoped>
ul.uetlibergLegend img {
  float: left;
  margin: 5px;
}
ul.uetlibergLegend li {
  clear: both;
}
</style>
