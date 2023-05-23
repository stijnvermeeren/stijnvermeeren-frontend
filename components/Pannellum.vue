<template>
  <div id="sphere"></div>
</template>

<script setup lang="ts">
import Pannellum from 'pannellum';
import 'pannellum/build/pannellum.css';

const {image} = defineProps<{
  image: string
}>()

onMounted(() => {
  Pannellum.viewer('sphere', {
    "type": "equirectangular",
    "panorama": `https://s3.eu-central-1.amazonaws.com/fotos.stijnvermeeren.be/sphere/${image}.jpg`,
    "autoLoad": true,
    "compass": false
  });
});
</script>
