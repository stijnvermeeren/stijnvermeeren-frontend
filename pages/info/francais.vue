<template>
  <div class="photocaption">
    <img src="/images/stijn/paris.jpg" alt="Photo de Stijn" />
    <p>Stijn à Paris (2010)</p>
  </div>

  <h2>Qui est Stijn?</h2>

  <p>Je m'appelle Stijn Vermeeren. <em>(<nuxt-link to="myname">Comment prononcer mon nom?</nuxt-link> - page anglais.)</em> Je suis d'<nuxt-link to="http://maps.google.com/maps?f=q&hl=en&geocode=&q=Aarschot,+Belgium&ie=UTF8&ll=51.018506,4.831924&spn=0.165435,0.466919&z=11&om=1">Aarschot</nuxt-link>, Belgique (Flandres). J'ai <stijn-age /> ans et je suis mathematicien. Depuis juin 2013, je travaille comme <em>Head of AI</em> pour <nuxt-link to="http://www.starmind.com">Starmind</nuxt-link> à Zürich.</p>

  <p>J'ai obtenu un Bachelor en Mathematiques de la <nuxt-link to="http://www.kuleuven.be/">Katholieke Universiteit Leuven</nuxt-link> en 2008. Ensuite, je suis allé à Cambridge pour le programme <nuxt-link to="http://www.maths.cam.ac.uk/postgrad/casm/">Certificate of Advanced Study in Mathematics</nuxt-link>, lequel j'ai achevé avec "distinction". En 2009, je me suis déplacé à l'Université de Leeds, où j'ai obtenu le doctorat.</p>

</template>

<script setup>
useHead({
  title: 'Qui est Stijn?',
  htmlAttrs: {
    lang: 'fr'
  }
})

definePageMeta({
  activeMenuLink: 'info'
})
</script>
