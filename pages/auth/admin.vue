<template lang="pug">
p Je wordt aangemeld...
</template>

<script setup>
  onMounted( () => {
    const redirect = useRoute().query['redirect']
    console.log("redirect", redirect)
    navigateTo(redirect ? redirect : '/', {replace: true})
  })
</script>
