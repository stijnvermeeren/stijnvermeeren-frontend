<template>
  <div class="photocaption">
    <img src="/images/stijn/praha.jpg" alt="Obraz Stijna" />
    <p>Stijn v Praze (2008)</p>
  </div>

  <h2>O Stijnovi</h2>

  <p>Jmenuju se Stijn Vermeeren. <em>(<nuxt-link to="myname">Jak vyslovit moje jméno?</nuxt-link> - anglická stránka.)</em> Jsem Belgičan (Vlám) z <nuxt-link to="http://maps.google.com/maps?f=q&hl=en&geocode=&q=Aarschot,+Belgium&ie=UTF8&ll=51.018506,4.831924&spn=0.165435,0.466919&z=11&om=1">Aarschotu</nuxt-link>. Mám <stijn-age /> let.</p>

  <p>Začal jsem se učit česky. Myslel jsem, že mluvím trochu česky. Cestoval jsem na Českou republiku. Nerozuměl jsem ani slovu. Sakra!</p>
</template>

<script setup lang="ts">
useMeta({
  title: 'O Stijnovi',
  lang: 'cs'
})

definePageMeta({
  activeMenuLink: '/info'
})
</script>
