<template>
  <image-viewer :image="image" />
</template>

<script setup lang="ts">
const image = useRoute().params.image as string;

definePageMeta({
  layout: "standalone",
});

useMeta({
  title: 'Panorama'
})
</script>
