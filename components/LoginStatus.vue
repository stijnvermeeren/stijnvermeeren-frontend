<template>
  <div v-if="user">Logged in as {{user.name}}. <nuxt-link to="/admin">Admin area</nuxt-link>. <v-btn @click="doLogout()" size="small" rounded="3" class="mx-2">Logout</v-btn></div>
</template>

<script setup lang="ts">
import {useAuth0} from "@auth0/auth0-vue";

const {logout, user} = useAuth0()

function doLogout() {
  logout()
  useRouter().replace('/')
}

</script>