<template>
  <h2>Projects</h2>

  <h3>Hiking and the Alps</h3>
  <ul>
    <li>
      <nuxt-link to="uetliberg">Trampelpfade am Uetliberg</nuxt-link><br />
      The Uetliberg (the 870m tall hill rising above Zürich) is full of fascinating and sometimes surprisingly challenging unofficial hiking trails ("Trampelpfade"). Documenting these has been the masterwork of Martin "Uto869" on Hikr. I have digitized all the routes and created an interactive map.
    </li>
    <li>
      <nuxt-link to="swisshikes">My hikes in Switzerland</nuxt-link><br />
      All my hikes (and via ferrata, fell running, mountaineering, ski tours and snow shoe tours) in Switzerland since 2013 on a single interactive map.
    </li>
    <li>
      <nuxt-link to="https://stijnvermeeren.be/slf">SLF snow map archive viewer</nuxt-link><br />
      <em>Currently defunct, as the SLF unfortunately does not publish the snow maps into their archive anymore since 2021.</em><br />
      The SLF is the Swiss institute for snow and avalanche research. Each winter, they regularly publish maps charting the snowfall and snow depth across Switzerland. This web page aims to make the maps from the SLF archive more accessible.
    </li>
  </ul>

  <h3>tijdloze.rocks</h3>
  <p>Website with stats and facts on the annual all-time music chart of Belgian radio station StuBru: <nuxt-link to="http://tijdloze.rocks">tijdloze.rocks</nuxt-link>. Fully open source (<nuxt-link to="https://github.com/stijnvermeeren/tijdloze-frontend">VueJS frontend</nuxt-link>, <nuxt-link to="https://github.com/stijnvermeeren/tijdloze-api">Scala/Play & MySQL backend</nuxt-link>).</p>

  <h3>Concept</h3>
  <p>I've implemented an <nuxt-link to="https://concept.stijnvermeeren.be">online version of the game Concept</nuxt-link> (<nuxt-link to="https://www.rprod.com/en/games/concept">original by Repos Productions</nuxt-link>). Source code and technical details can be found in the <nuxt-link to="https://github.com/stijnvermeeren/concept">Github project</nuxt-link>.</p>

  <h3>Mathematics</h3>
  <p>In 2013, I obtained a PhD in Mathematical Logic from the University of Leeds. My full thesis was titled "<a href="download/mathematics/Vermeeren_S_Mathematics_PhD_2013.pdf">Notions and applications of algorithmic randomness</a>" (pdf, 801 kB).</p>
  <ul>
    <li><nuxt-link to="mathematics">More mathematics</nuxt-link></li>
    <li><nuxt-link to="wiskunde">Meer wiskunde</nuxt-link></li>
  </ul>
</template>

<script setup>
  useHead({
    title: 'Projects'
  })

  definePageMeta({
    activeMenuLink: '/projects'
  })
</script>
