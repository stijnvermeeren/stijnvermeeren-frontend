<template>
  <client-only>
    <pannellum :image="image" />
  </client-only>
</template>

<script setup>
const image = useRoute().params.image;

definePageMeta({
  layout: "standalone",
});

useHead({
  title: '360° foto'
})
</script>
