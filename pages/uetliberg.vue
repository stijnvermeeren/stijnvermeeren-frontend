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

          <p>The Uetliberg (the 870m tall hill rising above Zürich) is full of fascinating and sometimes surprisingly challenging unofficial hiking trails ("Trampelpfade"). Documenting these has been the masterwork of <nuxt-link to="http://www.hikr.org/user/Uto869/">Martin "Uto869"</nuxt-link> on Hikr. Inspired by his work, I have made an interactive map of all of his routes and even some additional trails.</p>


          <v-expansion-panels color="info">
            <v-expansion-panel>
              <v-expansion-panel-title>
                Legende
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-list density="compact">
                  <uetliberg-legend-item color="#FF6114" :width="9" :opacity="0.66">
                    Often used hiking path, usually well-maintained, sometimes with signposts and/or waymarks. T1-T2
                  </uetliberg-legend-item>
                  <uetliberg-legend-item color="#FF0014" :width="6" :opacity="0.66">
                    Clearly visible trail. T2-T3
                  </uetliberg-legend-item>
                  <uetliberg-legend-item color="#FF0014" :width="5" :opacity="0.31">
                    Partially only a vague trail or pathless. T2-T3
                  </uetliberg-legend-item>
                  <uetliberg-legend-item color="#1428F0" :width="6" :opacity="0.66">
                    Clearly visible trail. Difficult terrain requiring alpine skills. T4-T5
                  </uetliberg-legend-item>
                  <uetliberg-legend-item color="#1428F0" :width="5" :opacity="0.31">
                    Partially only a vague trail or pathless. Difficult terrain requiring alpine skills. T4-T5
                  </uetliberg-legend-item>
                  <uetliberg-legend-item color="#003C14" :width="5" :opacity="0.66">
                    Official mountainbike trail. Best avoided by hikers.
                  </uetliberg-legend-item>
                  <uetliberg-legend-item color="#780078" :width="5" :opacity="0.66">
                    Trail often illegally used by mountainbikers. Not ideal for hiking.
                  </uetliberg-legend-item>
                  <uetliberg-legend-item color="#000000" :width="14" :opacity="0.195">
                    Route documented by Uto869. Click for a link to the description on Hikr.
                  </uetliberg-legend-item>
                </v-list>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>

          <p class="mt-4"><nuxt-link :to="`https://map.geo.admin.ch/#/map?${mapGeoAdminChParams}`">View on map.geo.admin.ch</nuxt-link> for more map options. Don't forget to try out the 3D mode!</p>

          <iframe :src="`https://map.geo.admin.ch/#/embed?${mapGeoAdminChParams}`" width="100%" height="600" style="border:0"></iframe>
        </v-tabs-window-item>

        <v-tabs-window-item value="de">
          <v-alert type="warning" variant="tonal">
            Ich versuche, die Karte so genau und aktuell wie möglich zu halten, kann jedoch keine Garantie für die Richtigkeit geben. Seit 2023 lebe ich nicht mehr in Zürich, daher kann ich keine sehr häufigen Aktualisierungen mehr vornehmen. Wanderwege können aufgrund von Forstarbeiten, Erdrutschen usw. jederzeit an Schwierigkeit zunehmen oder vollständig unbegehbar werden. <nuxt-link to="contact">Bitte gib mir Bescheid</nuxt-link>, wenn etwas nicht (mehr) stimmt.
          </v-alert>
          <v-alert type="warning" variant="tonal">
            Unterschätze den Uetliberg nicht! Einige der Pfade auf dieser Karte führen durch steiles, anspruchsvolles Gelände, wo ein Sturz schwerwiegende Folgen haben kann. Der Boden ist oft nass und rutschig, auch wenn es schon länger nicht mehr geregnet hat. Die Pfade sind im Abstieg in der Regel schwieriger zu begehen. Im Zweifelsfall (insbesondere, wenn man die Route noch nicht kennt) soll man für den Abstieg einen ausgeschilderten oder häufig begangenen Weg (Denzlerweg, Lindenweg) wählen.
          </v-alert>

          <p>Der Uetliberg, der 870 m hohe Hausberg von Zürich, ist hat viele faszinierende und manchmal überraschend anspruchsvolle inoffizielle Wanderrouten ("Trampelpfade"). Diese zu dokumentieren, war das Meisterwerk von <nuxt-link to="http://www.hikr.org/user/Uto869/">Martin "Uto869"</nuxt-link> auf Hikr. Inspiriert von seiner Arbeit habe ich eine interaktive Karte aller seiner Routen und sogar einiger zusätzlicher Pfaden erstellt.</p>

          <v-expansion-panels color="info">
            <v-expansion-panel>
              <v-expansion-panel-title>
                Legende
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-list density="compact">
                  <uetliberg-legend-item color="#FF6114" :width="9" :opacity="0.66">
                    Häufig begangener Weg, meist gut unterhalten, manchmal mit Wegweiser oder Markierungen. T1-T2
                  </uetliberg-legend-item>
                  <uetliberg-legend-item color="#FF0014" :width="6" :opacity="0.66">
                    Durchgehend sichtbarer Pfad. T2-T3
                  </uetliberg-legend-item>
                  <uetliberg-legend-item color="#FF0014" :width="5" :opacity="0.31">
                    Teilweise nur Pfadspuren oder weglos. T2-T3
                  </uetliberg-legend-item>
                  <uetliberg-legend-item color="#1428F0" :width="6" :opacity="0.66">
                    Durchgehend sichtbarer Pfad. Erfahrung in anspruchvolles, alpines Gelände vorausgesetzt. T4-T5
                  </uetliberg-legend-item>
                  <uetliberg-legend-item color="#1428F0" :width="5" :opacity="0.31">
                    Teilweise nur Pfadspuren oder weglos. Erfahrung in anspruchvolles, alpines Gelände vorausgesetzt. T4-T5
                  </uetliberg-legend-item>
                  <uetliberg-legend-item color="#003C14" :width="5" :opacity="0.66">
                    Offizieller Biketrail. Nicht geeignet für Wanderer.
                  </uetliberg-legend-item>
                  <uetliberg-legend-item color="#780078" :width="5" :opacity="0.66">
                    Weg geprägt von illegaler Benutzung durch Bikers. Nicht ideal für Wanderer.
                  </uetliberg-legend-item>
                  <uetliberg-legend-item color="#000000" :width="14" :opacity="0.195">
                    Trampfelpfad von Uto869 dokumentiert. Klicke für einen Link zur Beschreibung auf Hikr.
                  </uetliberg-legend-item>
                </v-list>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>

          <p class="mt-5"><nuxt-link :to="`https://map.geo.admin.ch/#/map?${mapGeoAdminChParams}`">In map.geo.admin.ch öffnen</nuxt-link> für mehr Möglichkeiten, inklusive 3D-Ansicht.</p>

          <iframe :src="`https://map.geo.admin.ch/#/embed?${mapGeoAdminChParams}`" width="100%" height="600" style="border:0"></iframe>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
useMeta({
  title: 'Trampelpfade am Uetliberg',
  description: 'An interactive map of the many fascinating and sometimes surprisingly challenging trails ("Trampelpfade") on the Uetliberg, the 870m tall hill rising above Zürich. Inspired by the detailed documentation of these trails by Martin "Uto869" on Hikr.',
  image: '/images/uetliberg/og_image.png'
})

const language = ref("en")

const mapGeoAdminChParams = "lang=en&center=2680271.7,1244290.14&z=6&topic=ech&layers=ch.swisstopo.zeitreihen@year=1864,f;ch.bfs.gebaeude_wohnungs_register,f;ch.bav.haltestellen-oev,f;ch.swisstopo.swisstlm3d-wanderwege;KML%7Chttp://stijnvermeeren.be/files/uetliberg/trampelpfade.kml;KML%7Chttps://stijnvermeeren.be/files/uetliberg/uto869.kml&bgLayer=ch.swisstopo.pixelkarte-farbe"

definePageMeta({
  activeMenuLink: '/projects'
})
</script>

<style scoped>
</style>
