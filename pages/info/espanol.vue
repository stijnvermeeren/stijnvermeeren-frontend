<template>
  <div class="photocaption">
    <img src="/images/stijn/elescorial.jpg" alt="Foto de Stijn" />
    <p>Stijn en El Escorial (2011)</p>
  </div>

  <h2>Sobre Stijn</h2>

  <p>Me llamo Stijn Vermeeren. <em>(<nuxt-link to="myname">Cómo se pronuncia mi nombre</nuxt-link> - página en inglés.)</em> Tengo <stijn-age /> años. Vengo de Bélgica, de <nuxt-link to="http://maps.google.com/maps?f=q&hl=en&geocode=&q=Aarschot,+Belgium&ie=UTF8&ll=51.018506,4.831924&spn=0.165435,0.466919&z=11&om=1">Aarschot</nuxt-link>. El holandés es mi lengua materna.</p>

  <p>Vivo en Leeds, en Inglaterra. Estoy haciendo un doctorado en matemáticas en la universidad de Leeds.</p>

  <p>Estoy aprendiendo español. Puedo practicar español en Leeds, con unos amigos mexicanos.</p>
</template>

<script setup>
useHead({
  title: 'Sobre Stijn',
  htmlAttrs: {
    lang: 'es'
  }
})

definePageMeta({
  activeMenuLink: '/info'
})
</script>
