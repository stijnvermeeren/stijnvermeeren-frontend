<template>
  <nuxt-link :to="link" :title="`Stijn @ ${title}`">
    <img :src="`/images/socialmedia/${image}`" :alt="`${title} logo`">
    <span v-if="!noContent">{{ title }}</span>
  </nuxt-link>
</template>

<script setup>
const props = defineProps({
  link: String,
  title: String,
  image: String,
  noContent: Boolean
});
</script>