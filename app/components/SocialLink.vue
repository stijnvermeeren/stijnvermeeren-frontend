<template>
  <nuxt-link :to="link" :title="`Stijn @ ${title}`">
    <img width="24" :src="`/images/socialmedia/${image}`" :alt="`${title} logo`" />
    <span>{{ title }}</span>
  </nuxt-link>
</template>

<script setup lang="ts">
defineProps<{
  link: string,
  title: string,
  image: string
}>()
</script>