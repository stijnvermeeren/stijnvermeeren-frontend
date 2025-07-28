<template>
  <h2>Trampelpfade am Uetliberg</h2>

  <v-card>
    <v-tabs v-model="language">
      <v-tab value="en">English</v-tab>
      <v-tab value="de">Deutsch</v-tab>
    </v-tabs>

    <v-card-text>
      <v-tabs-window v-model="language">
        <v-tabs-window-item value="en">
          <v-alert type="warning" variant="tonal">
            I try to make the map as accurate and up-to-date as possible, but I cannot guarantee its correctness. I don't live in Zurich anymore since 2023, so I can't make very frequent updates anymore. Trails can increase in difficulty or become completely impassable at any time due to forestry work, landslides, etc. <nuxt-link to="contact">Please let me know</nuxt-link> if you have any corrections for the map!
          </v-alert>
          <v-alert type="warning" variant="tonal">
            Don't underestimate the Uetliberg! Some of the trails on this map involve steep, technical terrain where a fall could have severe consequences. The ground often remains wet and slippery, even when it has not rained for a while. Trails are usually harder on the descent. When in doubt (especially when you have not done the trail before) pick an officially signposted hiking path or a well-maintained trail (Denzlerweg, Lindenweg) for the descent.
          </v-alert>
        </v-tabs-window-item>

        <v-tabs-window-item value="de">
          German
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>
  </v-card>

  <p>The Uetliberg (the 870m tall hill rising above Zürich) is full of fascinating and sometimes surprisingly challenging unofficial hiking trails ("Trampelpfade"). Documenting these has been the masterwork of <nuxt-link to="http://www.hikr.org/user/Uto869/">Martin "Uto869"</nuxt-link> on Hikr. Inspired by his work, I have made an interactive map of all of his routes and even some additional trails. (<nuxt-link to="http://www.hikr.org/post115832.html">Announcement on Hikr</nuxt-link>)</p>

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

  <iframe src="https://map.geo.admin.ch/#/embed?lang=en&center=2680271.7,1244290.14&z=6&topic=ech&layers=ch.swisstopo.zeitreihen@year=1864,f;ch.bfs.gebaeude_wohnungs_register,f;ch.bav.haltestellen-oev,f;ch.swisstopo.swisstlm3d-wanderwege;KML%7Chttp://stijnvermeeren.be/files/uetliberg/trampelpfade2.kml;KML%7Chttps://stijnvermeeren.be/files/uetliberg/uto869.kml&bgLayer=ch.swisstopo.pixelkarte-farbe" width="100%" height="600" style="border:0"></iframe>
</template>

<script setup lang="ts">
useMeta({
  title: 'Trampelpfade am Uetliberg',
  description: 'An interactive map of the many fascinating and sometimes surprisingly challenging trails ("Trampelpfade") on the Uetliberg, the 870m tall hill rising above Zürich. Inspired by the detailed documentation of these trails by Martin "Uto869" on Hikr.',
  image: '/images/uetliberg/og_image.png'
})

const language = ref("en")

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
