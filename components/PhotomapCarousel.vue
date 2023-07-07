<template>
  <div class="asset-map-image-marker">
    <div class="image"> <!-- TODO stop event propagation -->
      <v-carousel :height="120" cycle :interval="4000" hide-delimiters>
        <template #prev="{ onClick }"> <!-- TODO make click work -->
          <v-btn size="x-small" variant="tonal" color="white" @click="onClick">
            <v-icon :icon="mdiChevronLeft" />
          </v-btn>
        </template>
        <template #next="{ onClick }">
          <v-btn size="x-small" variant="tonal" color="white" @click="onClick">
            <v-icon :icon="mdiChevronRight" />
          </v-btn>
        </template>
        <v-carousel-item v-for="image in images" :src="image" cover />
      </v-carousel>
      <div>
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

/* Outside border */
.asset-map-image-marker {
  background-color: gold;
  border-radius: 5px;
  cursor: pointer !important;
  width: 160px;
  height: 160px;
  margin-left: -80px; /* margin-left = -width/2 */
  margin-top: -170px; /* margin-top = -height + arrow */
  padding: 2px;
  position: absolute;
}

/* Arrow on bottom of container */
.asset-map-image-marker:after {
  border-color: gold transparent;
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