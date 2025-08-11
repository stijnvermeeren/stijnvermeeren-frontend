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
          <nuxt-page lang="en"></nuxt-page>
        </v-tabs-window-item>
        <v-tabs-window-item value="de">
          <nuxt-page lang="de"></nuxt-page>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const DEFAULT_LANGUAGE = 'en'
const language = ref(route.query.lang ? route.query.lang : DEFAULT_LANGUAGE)

watch(language, (language) => {
  if (language === DEFAULT_LANGUAGE) {
    router.push({query: {}})
  } else {
    router.push({query: { lang: language }})
  }
})

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
</style>
