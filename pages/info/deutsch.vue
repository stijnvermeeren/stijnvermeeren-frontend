<template>
  <div class="photocaption">
    <img src="/images/stijn/berlin.jpg" alt="Foto von Stijn" />
    <p>Mats und Stijn in der Reichstagskuppel in Berlin (2012)</p>
  </div>

  <h2>Über Stijn</h2>

  <p>Mein Name ist Stijn Vermeeren. <em>(<nuxt-link to="myname">Wie meinen Namen aussprechen?</nuxt-link> - Seite auf englisch.)</em> Ich komme aus <nuxt-link to="http://maps.google.com/maps?f=q&hl=en&geocode=&q=Aarschot,+Belgium&ie=UTF8&ll=51.018506,4.831924&spn=0.165435,0.466919&z=11&om=1">Aarschot</nuxt-link> in Belgien. Ich bin ein <stijn-age /> Jahre alter Mathematiker. Von 2013 bis 2022 arbeitete ich als <em>Head of AI</em> für <nuxt-link to="http://www.starmind.com">Starmind</nuxt-link> in Zürich. Vorher habe ich promoviert an der <nuxt-link to="http://www.amsta.leeds.ac.uk/Pure/logic/">Logic Group der Universität Leeds</nuxt-link>. Ich habe auch studiert in <nuxt-link to="http://www.kuleuven.be/">Leuven</nuxt-link> (Bachelor) und in <nuxt-link to="http://www.maths.cam.ac.uk/postgrad/casm/">Cambridge</nuxt-link> (Certificate of Advanced Study in Mathematics). <nuxt-link to="/files/cv/CV-Stijn_Vermeeren-Deutsch.pdf">Mein Lebenslauf als PDF</nuxt-link>.</p>

  <p>Meine Muttersprache ist Niederländisch, aber ich verstehe auch Deutsch. Ich habe 1997-98 in Deutschland gelebt, in <nuxt-link to="http://maps.google.com/maps?f=q&hl=en&geocode=&q=wixhausen">Wixhausen</nuxt-link> (ja, schon...) bei Darmstadt.</p>

  <p>Mein Bruder <nuxt-link to="https://matsvermeeren.xyz/">Mats hat in Berlin promoviert</nuxt-link>.</p>
</template>

<script setup>
useHead({
  title: 'Über Stijn',
  htmlAttrs: {
    lang: 'de'
  }
})

definePageMeta({
  activeMenuLink: 'info'
})
</script>
