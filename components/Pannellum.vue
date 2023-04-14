<template>
  <div id="sphere"></div>
</template>

<script setup>
import 'pannellum';
import 'pannellum/build/pannellum.css';

const {image} = defineProps({
  image: String
})

onMounted(() => {
  pannellum.viewer('sphere', {
    "type": "equirectangular",
    "panorama": `https://s3.eu-central-1.amazonaws.com/fotos.stijnvermeeren.be/sphere/${image}.jpg`,
    "autoLoad": true,
    "compass": false
  });
});
</script>
