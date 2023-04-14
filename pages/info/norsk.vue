<template>
  <h2>Om Stijn</h2>

  <p>Jeg heter Stijn Vermeeren (<em>Stijn</em> uttales som det norsk ordet "stein"; les også <nuxt-link to="myname">den engelsk siden ved hvordan uttales mitt navn</nuxt-link>). Jeg kommer fra <nuxt-link to="http://maps.google.com/maps?f=q&hl=en&geocode=&q=Aarschot,+Belgium&ie=UTF8&ll=51.018506,4.831924&spn=0.165435,0.466919&z=11&om=1">Aarschot</nuxt-link> i Belgia. Jeg er <stijn-age /> år gammel. Jeg studerer matematikk i Leeds i England og jeg er nesten ferdig med min avhandling på en doktorgrad.</p>

  <p>Jeg lærer norsk siden desember 2012. Jeg synes at norsk er et vakkert språk. Jeg lærer raskt fordi jeg allerede snakker nederlandsk, engelsk og tysk, og det er mange likheter. Jeg lærer med boken "<nuxt-link to="http://www.amazon.co.uk/Yourself-Complete-Norwegian-Courses-Including/dp/1444107208/ref=sr_1_1?ie=UTF8&qid=1358784027&sr=8-1">Teach Yourself Norwegian</nuxt-link>", <nuxt-link to="http://www.ntnu.edu/now">Norwegian on the web</nuxt-link> av NTNU, <nuxt-link to="http://tv.nrk.no/programmer/utland">NRK TV</nuxt-link>, <nuxt-link to="http://www.tritrans.net/">TriTrans</nuxt-link>, <nuxt-link to="http://www.nob-ordbok.uio.no/perl/ordbok.cgi?ordbok=begge">Bokmålsordboka av Universitetet i Oslo</nuxt-link> og <nuxt-link to="http://www.youtube.com/results?search_query=kaizers+orchestra+tekst">Kaizers Orchestra</nuxt-link>. Min favoritt norsk sang er Helene Bøksles "<nuxt-link to="http://www.youtube.com/watch?v=CdjUYDYe4U8">Mitt Land</nuxt-link>".</p>

  <p>Jeg har vært på ferie i Norge med mine foreldre og brødre, i Aurlandsfjorden og i Oslo. Je vil gerne komme tilbake i fremtid. Jeg liker turgåing og Norge har veldig nydelige fjell og fjorder.</p>

  <p>Jeg vil gerne møte folk til å øve norsk mit, så vennligst <nuxt-link to="contact">skriv meg en beskjed</nuxt-link> på norks!</p>
</template>

<script setup>
useHead({
  title: 'Om Stijn',
  htmlAttrs: {
    lang: 'no'
  }
})

definePageMeta({
  activeMenuLink: '/info'
})
</script>
