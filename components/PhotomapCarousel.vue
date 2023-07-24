<template>
  <div class="asset-map-image-marker">
    <div class="image">
      <v-carousel :height="120" cycle :interval="4000" hide-delimiters :show-arrows="images.length > 1">
        <template #prev="{ props }">
          <v-btn :icon="mdiChevronLeft" size="small" density="compact" variant="tonal" color="white" @click="props.onClick" @dblclick.stop />
        </template>
        <template #next="{ props }">
          <v-btn :icon="mdiChevronRight" size="small" density="compact" variant="tonal" color="white" @click="props.onClick" @dblclick.stop />
        </template>
        <v-carousel-item v-for="image in images" :src='`https://s3.eu-central-1.amazonaws.com/photomap.stijnvermeeren.be/${image}`' cover />
      </v-carousel>
      <div class="title">
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { mdiChevronRight, mdiChevronLeft } from '@mdi/js'

defineProps({
    images: Array<String>,
    title: String
})
</script>

<style scoped>

.v-btn {
  margin-bottom: 5px;
  align-self: flex-end;
}

.v-btn.v-btn--variant-tonal :deep(.v-btn__underlay) {
  opacity: 0.4;
}

div.title {
  text-align: center;
  padding: 2px 5px;
}

/* Outside border */
.asset-map-image-marker {
  background-color: lightblue;
  border-radius: 5px;
  cursor: pointer !important;
  width: 160px;
  margin-top: -10px;
  transform: translate(-50%, -100%);
  padding: 2px;
  position: absolute;
}

/* Arrow on bottom of container */
.asset-map-image-marker:after {
  border-color: lightblue transparent;
  border-style: solid;
  border-width: 10px 10px 0;
  bottom: -10px;
  content: '';
  display: block;
  left: 70px;
  position: absolute;
  width: 0;
}

/* Inner image container */
.asset-map-image-marker div.image {
  border-radius: 5px;
  height: 100%;
  width: 100%;
  margin: 0;
}
</style>