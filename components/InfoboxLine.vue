<template>
  <div class="d-flex mt-2 mb-3">
    <div class="align-self-top">
      <v-img :src="`/images/icons/${icon}`" width="32" class="mr-3" />
    </div>
    <div class="align-self-center">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const { icon } = defineProps<{
  icon: string
}>()


</script>
