<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `Stijn Vermeeren: ${titleChunk}` : 'Stijn Vermeeren';
    },
    link: [
      {
        type: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro'
      },
      {
        rel: 'icon',
        href: '/images/favicon.png',
        type: "image/x-icon"
      }
    ],
    htmlAttrs: {
      lang: 'en'
    }
  })
</script>