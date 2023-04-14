<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
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
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css',
        integrity: "sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65",
        crossOrigin: "anonymous"
      }
    ]
  })
</script>