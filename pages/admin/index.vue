<template lang="pug">
h3 Admin

div
  v-btn(@click="testAPI()") Test API
</template>

<script setup>
import {useAuth0} from "@auth0/auth0-vue";

definePageMeta({ middleware: 'admin' })

const { getAccessTokenSilently } = useAuth0();

async function testAPI() {
  const headers = new Headers()

  const token = await getAccessTokenSilently()
  console.log(token)
  headers.append('Authorization', `Bearer ${token}`);

  const {data, error} = await useApiFetch('/admin-api/check', {headers: headers})
  console.log(data.value, error.value)
}
</script>
