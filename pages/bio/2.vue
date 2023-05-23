<template>
  <h2>Fotografische autobiografie, deel 2</h2>

  <bio-contents :current-page="2" />

  <p>Opgroeien doe ik in Aarschot, met uitzondering van het schooljaar 1997-'98. Dan woon ik een jaar in Duitsland, in dorpje Wixhausen meer bepaald. Ik ga er naar een Duitse school. De volgende foto is vanop de Duitse <em>bosklassen</em> in Lindenfels. Ik ben 10 jaar oud, maar zie er door de kleding, bril, stok en achtergrond (wat in hemelsnaam deed ik op een kerkhof?) zeven keer ouder uit...</p>

  <p class="biofoto"><img src="/images/bio/lindenfels.jpg" alt="Lindenfels" /></p>

  <p>Op vakantie in Lanzarote kan ik mij uitleven in mijn passie voor autosport...</p>

  <p class="biofoto"><img src="/images/bio/karting.jpg" alt="Karting" /></p>

  <p>Op het huwelijk van nonkel Dirk en tante Goele, blijkt dat niet alles en iedereen mijn groei kan volgen...</p>

  <p class="biofoto"><img src="/images/bio/groot.jpg" alt="Huwelijk nonkel Dirk en tante Goele" /></p>

  <p>Nochtans waren de eerste voortekenen van die groei al veel eerder merkbaar...</p>

  <p class="biofoto"><img src="/images/bio/stokbrood.jpg" alt="Stokbrood" /></p>

  <p><nuxt-link to="/bio/3">Vervolg...</nuxt-link></p>
</template>

<script setup lang="ts">
useMeta({
  lang: 'nl'
})

definePageMeta({
  activeMenuLink: '/info'
})
</script>
