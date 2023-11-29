<template lang="pug">
p Je wordt aangemeld...
</template>

<script setup>
import { authGuard } from '@auth0/auth0-vue';

  onMounted( async () => {
    const loggedIn = await authGuard(useRoute())
    if (loggedIn) {
      const redirect = useRoute().query['redirect']
      navigateTo(redirect ? redirect : '/', {replace: true})
    }
  })
</script>
