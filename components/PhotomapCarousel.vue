<template>
  <div class="asset-map-image-marker" @click="activeValue = cycleValue" v-if="images">
    <div class="image">
      <v-carousel v-model="cycleValue" :height="120" cycle :interval="4000" hide-delimiters :show-arrows="false">
        <v-carousel-item v-for="image in images" :src='`https://s3.eu-central-1.amazonaws.com/photomap.stijnvermeeren.be/${image}`' cover />
      </v-carousel>
      <div class="title">
        {{ title }}
      </div>
    </div>
    <v-overlay activator="parent">
      <v-carousel hide-delimiters :show-arrows="images.length > 1" v-model="activeValue">
        <template #prev="{ props }">
          <v-btn :icon="mdiChevronLeft" density="compact" variant="tonal" color="white" @click.stop="props.onClick" @dblclick.stop />
        </template>
        <template #next="{ props }">
          <v-btn :icon="mdiChevronRight" density="compact" variant="tonal" color="white" @click.stop="props.onClick" @dblclick.stop />
        </template>
        <v-carousel-item v-for="image in images" :src='`https://s3.eu-central-1.amazonaws.com/photomap.stijnvermeeren.be/${image}`' cover />
      </v-carousel>
    </v-overlay>
  </div>
</template>

<script setup lang="ts">
import { mdiChevronRight, mdiChevronLeft } from '@mdi/js'

defineProps({
    images: Array<String>,
    title: String
})

const cycleValue = ref()
const activeValue = ref()
</script>

<style scoped>
.v-btn.v-btn--variant-tonal :deep(.v-btn__underlay) {
  opacity: 0.4;
}

div.title {
  text-align: center;
  padding: 2px 5px;
}

div.image :deep(img) {
  border-radius: 5px;
}

/* Outside border */
.asset-map-image-marker {
    pointer-events: auto;
    background-color: lightblue;
    border-radius: 5px;
    cursor: pointer !important;
    width: 160px;
    transform: translate(0, -10px);
    padding: 2px;
    position: relative;
}

:deep(.v-window-item.v-carousel-item) {
  cursor: pointer !important;
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
</style>