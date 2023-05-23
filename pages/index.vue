<template>
  <v-row>
    <v-col>
      <v-tabs v-model="selectedLanguage" class="mb-3" density="compact">
        <v-tab value="en">English</v-tab>
        <v-tab value="nl">Nederlands</v-tab>
      </v-tabs>
      <v-window v-model="selectedLanguage">
        <v-window-item :eager="true" value="en">
          <v-img width="150" style="max-width: 30%;" src="/images/stijn/stijn.jpg" class="float-right" />
          <v-row>
            <v-col>
              <div>
                My name is Stijn Vermeeren.
                <v-btn to="/myname" size="small" rounded="3" class="mx-2">
                  How to pronounce
                </v-btn>
              </div>
            </v-col>
          </v-row>
          <infobox-line icon="switzerland.png">
            <stijn-age /> year old Belgian living in Zurich, Switzerland.
            <v-btn to="/contact" size="small" rounded="3" class="mx-2">
              <v-img src="/images/icons/email.png" width="18" class="mr-2" /> Contact
            </v-btn>
            <v-btn to="/info" size="small" rounded="3" class="mx-2">
              More about me
            </v-btn>
          </infobox-line>
          <infobox-line icon="education.png">
            PhD in <nuxt-link to="/mathematics">Mathematics</nuxt-link> with degrees from Leeds, Cambridge and Leuven.
          </infobox-line>
          <infobox-line icon="workplace.png">
            9 years of professional experience as data science team lead.
            <v-btn href="/files/cv/CV-Stijn_Vermeeren.pdf" size="small" rounded="3" class="mx-2">
              <v-img src="/images/icons/cv.png" width="18" class="mr-2" /> my CV
            </v-btn>
            <v-btn href="http://ch.linkedin.com/in/stijnvermeeren/" size="small" rounded="3" class="mx-2">
              <v-img src="/images/socialmedia/linkedin.png" width="18" class="mr-2" /> LinkedIn
            </v-btn>
          </infobox-line>
          <infobox-line icon="projects.png">
            Notable projects:
            <a href="https://tijdloze.rocks">tijdloze.rocks</a>,
            <nuxt-link to="/uetliberg">Uetliberg Trampelpfade</nuxt-link>,
            <nuxt-link to="/swisshikes">my hikes in Switzerland</nuxt-link>.
            <v-btn href="https://github.com/stijnvermeeren" size="small" rounded="3" class="mx-2">
              <v-img src="/images/socialmedia/github.png" width="18" class="mr-2" /> Github
            </v-btn>
            <v-btn to="/projects" size="small" rounded="3" class="mx-2">
              More projects
            </v-btn>
          </infobox-line>
        </v-window-item>
        <v-window-item :eager="true" value="nl">
          <v-img width="150" style="max-width: 30%;" src="/images/stijn/stijn.jpg" class="float-right" />
          <v-row>
            <v-col>
              Mijn naam is Stijn Vermeeren.
            </v-col>
          </v-row>
          <infobox-line icon="switzerland.png">
            <stijn-age /> jaar oude Vlaming die in Zürich, Zwitserland woont.
            <v-btn to="/contact" size="small" rounded="3" class="mx-2">
              <v-img src="/images/icons/email.png" width="18" class="mr-2" /> Contacteer mij
            </v-btn>
            <v-btn to="/info/nederlands" size="small" rounded="3" class="mx-2">
              Meer over mij
            </v-btn>
          </infobox-line>
          <infobox-line icon="education.png">
            Doctor in de <nuxt-link to="/wiskunde">wiskunde</nuxt-link> met diplomas van de universiteiten van Leeds, Cambridge en Leuven.
          </infobox-line>
          <infobox-line icon="workplace.png">
            9 jaren professionele ervaring als teamleider data science.
            <v-btn href="/files/cv/CV-Stijn_Vermeeren.pdf" size="small" rounded="3" class="mx-2">
              <v-img src="/images/icons/cv.png" width="18" class="mr-2" /> mijn CV (Engels)
            </v-btn>
            <v-btn href="http://ch.linkedin.com/in/stijnvermeeren/" size="small" rounded="3" class="mx-2">
              <v-img src="/images/socialmedia/linkedin.png" width="18" class="mr-2" /> LinkedIn
            </v-btn>
          </infobox-line>
          <infobox-line icon="projects.png">
            Belangrijke projecten:
            <a href="https://tijdloze.rocks">tijdloze.rocks</a>,
            <nuxt-link to="/uetliberg">Uetliberg Trampelpfade</nuxt-link>,
            <nuxt-link to="/swisshikes">mijn wandelingen in Zwitserland</nuxt-link>.
            <v-btn href="https://github.com/stijnvermeeren" size="small" rounded="3" class="mx-2">
              <v-img src="/images/socialmedia/github.png" width="18" class="mr-2" /> Github
            </v-btn>
            <v-btn to="/projects" size="small" rounded="3" class="mx-2">
              Meer projecten
            </v-btn>
          </infobox-line>
        </v-window-item>
      </v-window>

      <h3 class="mt-5">
        Nieuwste fotoalbums
        <v-btn to="/fotoalbums" size="small" rounded="3" class="ml-2">
          Alle fotoalbums
        </v-btn>
      </h3>
      <v-slide-group show-arrows>
        <v-slide-group-item v-for="item in data" :key="item.link">
          <v-card :href="item.link" max-width="280" rounded="3" flat>
            <v-card-item class="px-1">
              <v-img v-if="item.thumbnail_image" :src="item.thumbnail_image" width="280" height="180" cover :alt="item.title" :title="item.title" />
              <v-card-title>{{ item.title }}</v-card-title>
              <v-card-subtitle>{{ item.time_range }}</v-card-subtitle>
            </v-card-item>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import InfoboxLine from "~/components/InfoboxLine.vue";

interface ResponseItemType {
  title: string,
  link: string,
  time_range: string,
  thumbnail_image?: string
}
const { data }: { data: Ref<Array<ResponseItemType>> } = await useApiFetch('/foto/home-api');

definePageMeta({
    activeMenuLink: '/'
})

const selectedLanguage = ref<string | undefined>(undefined)
</script>

<style scoped>
div.content a.v-card {
    color: inherit;
    text-decoration: none;
}

.v-card-subtitle {
    font-size: 80%;
    letter-spacing: -0.2px;
}
</style>
