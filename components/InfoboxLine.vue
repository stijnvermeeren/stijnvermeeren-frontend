<template>
  <div class="d-flex my-2">
    <div class="align-self-top">
      <v-img :src="`/images/icons/${icon}`" width="32" class="mr-3" />
    </div>
    <div class="align-self-center">
      <slot />
    </div>
  </div>
</template>

<script setup>
const { currentPage } = defineProps({
  icon: String
})


</script>
