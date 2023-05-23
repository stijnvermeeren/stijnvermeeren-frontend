<template>
  <h2>Fotografische autobiografie, deel 5</h2>

  <bio-contents :current-page="5" />

  <p>Ik ben 18 jaar oud en een nieuwe wereld gaat voor me open. Ik behaal mijn rijbewijs en ga op kot in Residentie Groenveld. Aan de K.U.Leuven begin ik aan de Bachelor in de Wiskunde. Maar natuurlijk duik ik ook in het Leuvense studentenleven, en neem ik deel aan de activiteiten van studentenkring Wina. Eerst nog zonder lint...</p>

  <p class="biofoto"><img src="/images/bio/cantus.jpg" alt="Cantus" /></p>

  <p>...en de twee jaren daarna mét lint (en lichtjes bezopen) als webteamverantwoordelijke van het presidium...</p>

  <p class="biofoto"><img src="/images/bio/cantusejw.jpg" alt="Cantus" /></p>

  <p>Drie jaar later heb ik een <em>grootste onderscheiding</em> en een toelating tot de University of Cambridge op zak. Afscheid nemen van de K.U.Leuven doe ik door de eer van de universiteit te verdedigen op twee wiskundecompetities. De Nederlandse LIMO-competitie 2008 in Leiden wordt zowaar gewonnen door ons Leuvense team. In de zomer van dat jaar trek ik samen met Christophe Debry - en met Arne Loosveldt in onze gedachten - naar Blagoevgrad voor de International Mathematical Competition for University Students.</p>

  <p class="biofoto"><img src="/images/bio/rila.jpg" alt="Rila" /></p>

  <p>Ik word er 104'de op 283 deelnemers. Helaas ben ik net de beste deelnemer met een <em>Third Prize</em>, nummers 103 en beter krijgen een <em>Second Prize</em>... Maar veel belangrijker dan dat is natuurlijk het internationale contact met de andere deelnemers. Dat was, net als bij de IMO in 2005, een zeer verrijkende ervaring.</p>

  <p class="biofoto"><img src="/images/bio/blagoevgrad.jpg" alt="IMC in Blagoevgrad" /></p>

  <p><nuxt-link to="/bio/6">Vervolg...</nuxt-link></p>
</template>


<script setup lang="ts">
useMeta({
  lang: 'nl'
})

definePageMeta({
  activeMenuLink: '/info'
})
</script>
