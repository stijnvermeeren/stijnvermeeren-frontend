<template lang="pug">
h3 Admin

div
  v-btn(@click="testAPI()") Test API
</template>

<script setup>
definePageMeta({ middleware: 'admin' })

const {withAccessToken} = useAuth()

async function testAPI() {
  const {data, error} = await useApiFetch('/admin-api/check', withAccessToken())
  console.log(data.value, error.value)
}
</script>
