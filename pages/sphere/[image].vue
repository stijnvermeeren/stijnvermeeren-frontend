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

useMeta({
  title: '360° foto'
})
</script>
