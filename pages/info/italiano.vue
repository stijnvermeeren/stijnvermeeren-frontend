<template>
  <img src="/images/stijn/stijn.jpg" alt="Fotografia di Stijn" class="foto" />

  <h2>A proposito di Stijn</h2>

  <p>Mi chiamo Stijn Vermeeren. <em>(<nuxt-link to="myname">Come si pronunzia il mio nome</nuxt-link> - pagina inglese.)</em> Ho <stijn-age /> anni. Sono belga, di <nuxt-link to="http://maps.google.com/maps?f=q&hl=en&geocode=&q=Aarschot,+Belgium&ie=UTF8&ll=51.018506,4.831924&spn=0.165435,0.466919&z=11&om=1">Aarschot</nuxt-link>. L'olandese è la mia lingua madre.</p>

  <p>Sono matematico, lavorando come <em>Head of AI</em> per <nuxt-link to="http://www.starmind.com">Starmind</nuxt-link> a Zurigo. Ho ottenuto il dottorato nella <nuxt-link to="http://www.maths.leeds.ac.uk/pure/logic/group.html">logica matematica all'Università di Leeds</nuxt-link>. Prima, studiavo all'<nuxt-link to="http://www.kuleuven.be/">Università cattolico di Leuven</nuxt-link> (laurea triennale) e all'Università di Cambridge (<nuxt-link to="http://www.maths.cam.ac.uk/postgrad/casm/">Certificate of Advanced Study in Mathematics</nuxt-link>).</p>
</template>

<script setup>
useMeta({
  title: 'A proposito di Stijn',
  lang: 'it'
})

definePageMeta({
  activeMenuLink: '/info'
})
</script>
