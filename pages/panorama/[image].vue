<template>
  <image-viewer :image="image" />
</template>

<script setup>
const image = useRoute().params.image;

definePageMeta({
  layout: "standalone",
});

useHead({
  title: 'Panorama'
})
</script>
