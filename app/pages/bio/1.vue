<template>
  <h2>Fotografische autobiografie, deel 1</h2>

  <bio-contents :current-page="1" />

  <p>In 1987 zie ik het levenslicht in Leuven. Meteen worden verschillende lotsbestemmingen op mij uitgeprobeerd. Zoals breien...</p>

  <p class="biofoto"><img src="/images/bio/breien.jpg" alt="Breien" /></p>

  <p>...en de modewereld...</p>

  <p class="biofoto"><img src="/images/bio/modeshow.jpg" alt="Modeshow" /></p>

  <p>Snel wordt echter duidelijk dat maar een onderwerp mij echt kan boeien...</p>

  <p class="biofoto"><img src="/images/bio/telraam.jpg" alt="Telraam" /></p>

  <p>...wiskunde!</p>

  <p>Neem daarbij ook een scherp ontwikkeld moreel onderscheid tussen <em>kwaad</em>...</p>

  <p class="biofoto"><img src="/images/bio/sint.jpg" alt="Sint" /></p>

  <p>..., <em>goed</em>...</p>

  <p class="biofoto"><img src="/images/bio/goofy.jpg" alt="Goofy" /></p>

  <p>...en (<em>buiten categorie</em>) mijn jongere broers Steven en Mats...</p>

  <p class="biofoto"><img src="/images/bio/broers.jpg" alt="Steven en Mats" /></p>

  <p>...en ik ben klaar om de wereld te veroveren!</p>

  <p><nuxt-link to="/bio/2">Vervolg...</nuxt-link></p>
</template>

<script setup lang="ts">
useMeta({
  lang: 'nl'
})

definePageMeta({
  alias: ['/bio'],
  activeMenuLink: '/info'
})
</script>