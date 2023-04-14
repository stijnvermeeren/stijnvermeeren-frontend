<template>
  <h2>Fotografische autobiografie, deel 3</h2>

  <bio-contents :current-page="3" />

  <p>Inmiddels zit ik in mijn laatste jaar secundair onderwijs aan het Sint-Jozefscollege van Aarschot. Maar dat wilt natuurlijk niet zeggen dat ik me onthoud van bezigheden als Kinder Surprise-gevechten...</p>

  <p class="biofoto"><img src="/images/bio/kindersurprise.jpg" alt="Kinder Surprise gevecht" /></p>

  <p>Op <em>bezinning</em> met 6WeWi ga ik uit de bol tijdens onze versie van het Swingpaleis. De meisjes kunnen hun verbazing daarover niet verbergen!</p>

  <p class="biofoto"><img src="/images/bio/bezinning.jpg" alt="Uit de bol op bezinning" /></p>

  <p>Maar er zijn ook momenten waarop je je toekomst als wetenschapper serieus moet nemen. In Gasthuisberg in het kader van Scientists @ Work bijvoorbeeld, waar het geklungel van ons team zowaar vereeuwigd wordt door ROB...</p>

  <p class="biofoto"><img src="/images/bio/scientistsatwork.jpg" alt="Scientists at Work" /></p>

  <p>Dan is er natuurlijk nog de Italië-reis met alle zesdejaars...</p>

  <p class="biofoto"><img src="/images/bio/pompei.jpg" alt="Pompei" /></p>

  <p>Hieronder ben ik op Paasdag op weg naar het Vaticaan. We krijgen er de Paaszegen van een op dat moment al doorzieke Paus Johannes-Paulus II, die nog tijdens onze reis zal sterven. We bouwen op het Sint-Pietersplein een heus feestje, samen met jongeren van over de hele wereld. Zij gingen waarschijnlijk uit de bol uit onvervalste religieuze begeestering, en wij namen daar maar al te graag aan deel...</p>

  <p class="biofoto"><img src="/images/bio/rome.jpg" alt="Rome" /></p>

  <p><nuxt-link to="/bio/4">Vervolg...</nuxt-link></p>
</template>


<script setup>
useHead({
  htmlAttrs: {
    lang: 'nl'
  }
})

definePageMeta({
  activeMenuLink: '/info'
})
</script>
