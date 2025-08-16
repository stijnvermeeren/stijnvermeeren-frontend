<template>
  <h2>Projects</h2>

  <v-container>
    <v-row>
      <v-col class="v-col-12 v-col-md-4">
        <v-card rounded="3" flat>
          <v-card-item>
            <nuxt-link to="/uetliberg">
              <v-img class="mx-auto" src="/images/projects/uetliberg.png" width="280" height="180" cover />
            </nuxt-link>
            <v-card-title class="text-center">
              <nuxt-link to="/uetliberg">Trampelpfade am Uetliberg</nuxt-link></v-card-title>
            <v-card-text>An interactive map of the official and unofficial trails ("Trampelpfade") on the Uetliberg (the 870m tall hill rising above Zürich).</v-card-text>
          </v-card-item>
        </v-card>
      </v-col>
      <v-col class="v-col-12 v-col-md-4">
        <v-card rounded="3" flat>
          <v-card-item>
            <nuxt-link to="/swisshikes">
              <v-img class="mx-auto" src="/images/projects/swisshikes.png" width="280" height="180" cover />
            </nuxt-link>
            <v-card-title class="text-center">
              <nuxt-link to="/swisshikes">My hikes in Switzerland</nuxt-link></v-card-title>
            <v-card-text>All my hikes (and via ferrata, fell running, mountaineering, ski tours and snow shoe tours) in Switzerland since 2013 on a single interactive map.</v-card-text>
          </v-card-item>
        </v-card>
      </v-col>
      <v-col class="v-col-12 v-col-md-4">
        <v-card rounded="3" flat>
          <v-card-item>
            <nuxt-link href="https://tijdloze.rocks">
              <v-img class="mx-auto" src="/images/projects/tijdloze.png" width="280" height="180" cover />
            </nuxt-link>
            <v-card-title class="text-center">
              <nuxt-link href="https://tijdloze.rocks">tijdloze.rocks</nuxt-link>
            </v-card-title>
            <v-card-text>
              Website with stats and facts on the annual all-time music chart of Belgian radio station StuBru. Fully open source (<nuxt-link to="https://github.com/stijnvermeeren/tijdloze-frontend">VueJS frontend</nuxt-link>, <nuxt-link to="https://github.com/stijnvermeeren/tijdloze-api">Scala/Play & MySQL backend</nuxt-link>).
            </v-card-text>
          </v-card-item>
        </v-card>
      </v-col>
      <v-col class="v-col-12 v-col-md-4">
        <v-card rounded="3" flat>
          <v-card-item>
            <nuxt-link href="https://concept.stijnvermeeren.be">
              <v-img class="mx-auto" src="/images/projects/concept.png" width="280" height="180" cover />
            </nuxt-link>
            <v-card-title class="text-center">
              <nuxt-link href="https://concept.stijnvermeeren.be">Concept</nuxt-link>
            </v-card-title>
            <v-card-text>
              An <a href="https://concept.stijnvermeeren.be">online version of the game Concept</a> (<nuxt-link href="https://www.rprod.com/en/games/concept">original by Repos Productions</nuxt-link>). Source code and technical details can be found in the <nuxt-link href="https://github.com/stijnvermeeren/concept">Github project</nuxt-link>.
            </v-card-text>
          </v-card-item>
        </v-card>
      </v-col>
      <v-col class="v-col-12 v-col-md-4">
        <v-card rounded="3" flat>
          <v-card-item>
            <nuxt-link to="/mathematics">
              <v-img class="mx-auto" src="/images/projects/mathematics.png" width="280" height="180" cover />
            </nuxt-link>
            <v-card-title class="text-center">
              <nuxt-link to="/mathematics">Mathematics</nuxt-link>
            </v-card-title>
            <v-card-text>
              In 2013, I obtained a PhD in Mathematical Logic from the University of Leeds. My full thesis was titled "<a href="/files/mathematics/Vermeeren_S_Mathematics_PhD_2013.pdf">Notions and applications of algorithmic randomness</a>" (pdf, 801 kB).<br />
              <ul>
                <li><nuxt-link to="mathematics">More mathematics</nuxt-link></li>
                <li><nuxt-link to="wiskunde">Meer wiskunde</nuxt-link></li>
              </ul>
            </v-card-text>
          </v-card-item>
        </v-card>
      </v-col>
      <v-col class="v-col-12 v-col-md-4">
        <v-card rounded="3" flat>
          <v-card-item>
            <v-img class="mx-auto" src="/images/projects/slf.png" width="280" height="180" cover />
            <v-card-title class="text-center">
              <nuxt-link href="https://stijnvermeeren.be/slf">SLF snow map archive viewer</nuxt-link>
            </v-card-title>
            <v-card-text>
              <em>Currently defunct, as the SLF unfortunately does not publish the snow maps into their archive anymore since 2021.</em><br />
              The SLF is the Swiss institute for snow and avalanche research. Each winter, they regularly publish maps charting the snowfall and snow depth across Switzerland. This web page aims to make the maps from the SLF archive more accessible.
            </v-card-text>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  useMeta({
    title: 'Projects'
  })

  definePageMeta({
    activeMenuLink: '/projects'
  })
</script>
