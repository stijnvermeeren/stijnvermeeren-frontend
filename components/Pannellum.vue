<template>
  <div id="sphere"></div>
</template>

<script setup lang="ts">
import 'pannellum';
import 'pannellum/build/pannellum.css';

interface CustomWindow extends Window {
    pannellum?: any;
}
declare const window: CustomWindow;


const {image} = defineProps<{
  image: string
}>()
onMounted(() => {
  window.pannellum.viewer('sphere', {
    "type": "equirectangular",
    "panorama": `https://s3.eu-central-1.amazonaws.com/fotos.stijnvermeeren.be/sphere/${image}.jpg`,
    "autoLoad": true,
    "compass": false
  });
});
</script>
