<template>
  <v-alert type="warning" variant="tonal">
    {{ translations["warning_1_1"][lang] }} <nuxt-link to="contact">{{ translations["warning_1_call_to_action"][lang] }}</nuxt-link>{{ translations["warning_1_2"][lang] }}
  </v-alert>
  <v-alert type="warning" variant="tonal">
    {{ translations["warning_2"][lang] }}
  </v-alert>

  <p>{{ translations["description_1"][lang] }} <nuxt-link to="http://www.hikr.org/user/Uto869/">Martin "Uto869"</nuxt-link> {{ translations["description_2"][lang] }}</p>

  <v-expansion-panels color="info">
    <v-expansion-panel>
      <v-expansion-panel-title>
        {{ translations["legend"][lang] }}
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-list density="compact">
          <uetliberg-legend-item color="#FF6114" :width="9" :opacity="0.66">
            {{ translations["legend_path"][lang] }}
          </uetliberg-legend-item>
          <uetliberg-legend-item color="#FF0014" :width="6" :opacity="0.66">
            {{ translations["legend_trail"][lang] }}
          </uetliberg-legend-item>
          <uetliberg-legend-item color="#FF0014" :width="5" :opacity="0.31">
            {{ translations["legend_trail_vague"][lang] }}
          </uetliberg-legend-item>
          <uetliberg-legend-item color="#1428F0" :width="6" :opacity="0.66">
            {{ translations["legend_alpin"][lang] }}
          </uetliberg-legend-item>
          <uetliberg-legend-item color="#1428F0" :width="5" :opacity="0.31">
            {{ translations["legend_alpin_vague"][lang] }}
          </uetliberg-legend-item>
          <uetliberg-legend-item color="#003C14" :width="5" :opacity="0.66">
            {{ translations["legend_bike_official"][lang] }}
          </uetliberg-legend-item>
          <uetliberg-legend-item color="#780078" :width="5" :opacity="0.66">
            {{ translations["legend_bike_illegal"][lang] }}
          </uetliberg-legend-item>
          <uetliberg-legend-item color="#000000" :width="14" :opacity="0.195">
            {{ translations["legend_uto869"][lang] }}
          </uetliberg-legend-item>
        </v-list>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>

  <p class="mt-5"><nuxt-link :to="`https://map.geo.admin.ch/#/map?${mapGeoAdminChParams}`">{{ translations["open_1"][lang] }}</nuxt-link> {{ translations["open_2"][lang] }}</p>

  <iframe :src="`https://map.geo.admin.ch/#/embed?${mapGeoAdminChParams}`" width="100%" height="600" style="border:0"></iframe>

  <p class="mt-5">{{ translations["github"][lang] }}: <nuxt-link to="https://github.com/stijnvermeeren/trampelpfade-am-uetliberg">github.com/stijnvermeeren/trampelpfade-am-uetliberg</nuxt-link></p>
</template>

<script setup lang="ts">
enum Language {
  EN = "en",
  DE = "de"
}

type Props = {
  lang?: Language
}

const props = withDefaults(defineProps<Props>(), {
  lang: Language.EN
})

const mapGeoAdminChParams = "lang=en&center=2680271.7,1244290.14&z=6&topic=ech&layers=ch.swisstopo.zeitreihen@year=1864,f;ch.bfs.gebaeude_wohnungs_register,f;ch.bav.haltestellen-oev,f;ch.swisstopo.swisstlm3d-wanderwege;KML%7Chttp://stijnvermeeren.be/files/uetliberg/trampelpfade.kml;KML%7Chttps://stijnvermeeren.be/files/uetliberg/uto869.kml&bgLayer=ch.swisstopo.pixelkarte-farbe"

const translations = {
  "warning_1_1": {
    "de": "Pfade können aufgrund von Forstarbeiten, Erdrutschen usw. jederzeit an Schwierigkeit zunehmen oder vollständig unbegehbar werden. Ich versuche, die Karte so genau und aktuell wie möglich zu halten, kann jedoch keine Garantie für die Richtigkeit geben. Seit 2023 wohne ich nicht mehr in Zürich, daher kann ich keine sehr häufigen Aktualisierungen mehr vornehmen. ",
    "en": "Trails can increase in difficulty or become completely impassable at any time due to forestry work, landslides, etc. I try to make the keep as accurate and up-to-date as possible, but I cannot guarantee its correctness. I don't live in Zurich anymore since 2023, so I can't make very frequent updates anymore."
  },
  "warning_1_call_to_action": {
    "de": "Bitte gib mir Bescheid",
    "en": "Please let me know"
  },
  "warning_1_2": {
    "de": ", wenn etwas nicht (mehr) stimmt",
    "en": " if you have any corrections for the map!"
  },
  "warning_2": {
    "de": "Unterschätze den Uetliberg nicht! Einige der Pfade auf dieser Karte führen durch steiles, anspruchsvolles Gelände, wo ein Sturz schwerwiegende Folgen haben kann. Der Boden ist oft nass und rutschig, auch wenn es schon länger nicht mehr geregnet hat. Die Pfade sind im Abstieg in der Regel schwieriger zu begehen. Im Zweifelsfall (insbesondere, wenn man die Route noch nicht kennt) soll man für den Abstieg einen ausgeschilderten oder häufig begangenen Weg (Denzlerweg, Lindenweg) wählen.",
    "en": "Don't underestimate the Uetliberg! Some of the trails on this map involve steep, technical terrain where a fall could have severe consequences. The ground often remains wet and slippery, even when it has not rained for a while. Trails are usually harder on the descent. When in doubt (especially when you have not done the trail before) pick an officially signposted hiking path or a well-maintained trail (Denzlerweg, Lindenweg) for the descent."
  },
  "description_1": {
    "de": "Der Uetliberg, der 870 m hohe Hausberg von Zürich, ist hat viele faszinierende und manchmal überraschend anspruchsvolle inoffizielle Wanderrouten (\"Trampelpfade\"). Diese zu dokumentieren, war das Meisterwerk von",
    "en": "The Uetliberg (the 870m tall hill rising above Zürich) is full of fascinating and sometimes surprisingly challenging unofficial hiking trails (\"Trampelpfade\"). Documenting these has been the masterwork of"
  },
  "description_2": {
    "de": "auf Hikr. Inspiriert von seiner Arbeit habe ich eine interaktive Karte aller seiner Routen und sogar einiger zusätzlicher Pfaden erstellt.",
    "en": "on Hikr. Inspired by his work, I have made an interactive map of all of his routes and even some additional trails."
  },
  "legend": {
    "de": "Legende",
    "en": "Legend"
  },
  "legend_path": {
    "de": "Häufig begangener Weg, meist gut unterhalten, manchmal mit Wegweiser oder Markierungen. T1-T2",
    "en": "Often used hiking path, usually well-maintained, sometimes with signposts and/or waymarks. T1-T2"
  },
  "legend_trail": {
    "de": "Durchgehend sichtbarer Pfad. T2-T3",
    "en": "Clearly visible trail. T2-T3"
  },
  "legend_trail_vague": {
    "de": "Teilweise nur Pfadspuren oder weglos. T2-T3",
    "en": "Partially only a vague trail or pathless. T2-T3"
  },
  "legend_alpin": {
    "de": "Durchgehend sichtbarer Pfad. Erfahrung in anspruchvolles, alpines Gelände vorausgesetzt. T4-T5",
    "en": "Clearly visible trail. Difficult terrain requiring alpine skills. T4-T5"
  },
  "legend_alpin_vague": {
    "de": "Teilweise nur Pfadspuren oder weglos. Erfahrung in anspruchvolles, alpines Gelände vorausgesetzt. T4-T5",
    "en": "Partially only a vague trail or pathless. Difficult terrain requiring alpine skills. T4-T5"
  },
  "legend_bike_official": {
    "de": "Offizieller Biketrail. Nicht geeignet für Wanderer.",
    "en": "Official mountainbike trail. Best avoided by hikers."
  },
  "legend_bike_illegal": {
    "de": "Weg geprägt von illegaler Benutzung durch Bikers. Nicht ideal für Wanderer.",
    "en": "Trail often illegally used by mountainbikers. Not ideal for hiking."
  },
  "legend_uto869": {
    "de": "Trampfelpfad von Uto869 dokumentiert. Klicke für einen Link zur Beschreibung auf Hikr.",
    "en": "Route documented by Uto869. Click for a link to the description on Hikr."
  },
  "open_1": {
    "de": "In map.geo.admin.ch öffnen",
    "en": "View on map.geo.admin.ch"
  },
  "open_2": {
    "de": "für mehr Möglichkeiten, inklusive 3D-Ansicht.",
    "en": "for more map options. Don't forget to try out the 3D mode!"
  },
  "github": {
    "de": "Die Geodaten (QGIS-Projekt, Geopackages) hinter dieser Karten sind auf GitHub verfügbar",
    "en": "The geodata (QGIS project, Geopackages) behind this map are available on GitHub"
  },
}

</script>