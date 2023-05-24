<template>
  <p class="bio_inhoud">
    <span v-for="page in pages">
      <nuxt-link v-if="page !== currentPage" :to="`/bio/${page}`">Deel {{page}}</nuxt-link>
      <span v-else>Deel {{page}}</span>
      <span v-if="page < pageCount"> - </span>
    </span>
  </p>
</template>

<script setup lang="ts">
defineProps<{
  currentPage: number
}>()

const pageCount = 7
const pages = Array.from(Array(pageCount).keys(),(_, i) => i + 1)
</script>

<style scoped>
  p.bio_inhoud {
    margin: -.5em 0 1.3em 3em;
  }
</style>