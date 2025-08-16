<script setup lang="ts">
const props = defineProps({
  color: {
    type: String
  },
  opacity: {
    type: Number,
    default: 1
  },
  width: {
    type: Number,
    default: 1
  }
})
</script>

<template>
  <v-list-item class="item">
    <template v-slot:prepend>
      <v-img class="mr-4">
        <svg width="40" height="20" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="10" x2="40" y2="10" :stroke="color" :stroke-width="width" :stroke-opacity="opacity" />
        </svg>
      </v-img>
    </template>
    <slot />
  </v-list-item>
</template>

<style scoped>
.item {
  min-height: auto;
  padding-top: 2px;
  padding-bottom: 2px;
}
</style>