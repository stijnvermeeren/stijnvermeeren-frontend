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
