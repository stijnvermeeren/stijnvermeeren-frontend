<template>
  <client-only>
    <pannellum :image="image" />
  </client-only>
</template>

<script setup lang="ts">
const image = useRoute().params.image as string;

definePageMeta({
  layout: "standalone",
});

useMeta({
  title: '360° foto'
})
</script>

<style scoped>
  #sphere {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
  }
</style>
