<template>
  <div class="row">
    <div class="col-xs-12 col-lg-9">
      <div class="content-grid clearfix">
        <div v-if="page > 1">
          <div v-if="data.previousPage" class="stream-previous">
            <nuxt-link :to="{name: 'blog', query: { page: data.previousPage}}">Vorige pagina</nuxt-link>
          </div>
          <div v-if="data.nextPage" class="stream-next">
            <nuxt-link :to="{name: 'blog', query: { page: data.nextPage}}">Volgende pagina</nuxt-link>
          </div>
          <div style="clear: both;"></div>
        </div>
  
        <div v-for="dayData in data.streamPerDay" :key="dayData.date">
          <div class="stream-date">{{dayData.date}}</div>
          <stream-item v-for="item in dayData.items" :item="item" />
        </div>
  
        <div v-if="data.previousPage" class="stream-previous">
          <nuxt-link :to="{name: 'blog', query: { page: data.previousPage}}">Vorige pagina</nuxt-link>
        </div>
        <div v-if="data.nextPage" class="stream-next">
          <nuxt-link :to="{name: 'blog', query: { page: data.nextPage}}">Volgende pagina</nuxt-link>
        </div>
        <div style="clear: both;"></div>
      </div>
    </div>
    <div class="col-lg-3 visible-lg side-bar">
      <h3 class="h4">I'm Stijn Vermeeren.</h3>
      <ul>
        <li>Belgian in Zürich.</li>
        <li>Data Scientist and Scala Software Engineer (<nuxt-link to="/files/cv/CV-Stijn_Vermeeren.pdf">view CV</nuxt-link>).</li>
        <li>Mathematician.</li>
        <li>Polyglot.</li>
        <li>Hiker and mountaineer.</li>
        <li>2-kyu go player.</li>
      </ul>
      <p><nuxt-link to="info">More about me</nuxt-link>.<br /><nuxt-link to="myname">How to pronounce my name</nuxt-link>.</p>
  
      <h3 class="h4">Ik ben Stijn Vermeeren.</h3>
      <ul>
        <li>Vlaming in Zürich.</li>
        <li>Data scientist en Scala softwareontwikkelaar.</li>
        <li>Wiskundige.</li>
        <li>Polyglot.</li>
        <li>Bergwandelaar en alpinist.</li>
        <li>2-kyu go-speler.</li>
      </ul>
      <p><nuxt-link to="info/nederlands">Meer over mij</nuxt-link>.</p>
  
      <div class="side-bar-profiles">
        <ul class="list-inline">
          <li class="list-inline-item"><social-link link="http://ch.linkedin.com/in/stijnvermeeren/" title="LinkedIn" image="linkedin.png" no-content /></li>
          <li class="list-inline-item"><social-link link="https://www.xing.com/profile/Stijn_Vermeeren" title="XING" image="XING.png" no-content /></li>
          <li class="list-inline-item"><social-link link="http://www.facebook.com/stijnvermeeren" title="Facebook" image="facebook.png" no-content /></li>
          <li class="list-inline-item"><social-link link="http://www.icheckmovies.com/profiles/stijnvermeeren/" title="iCheckMovies" image="icheckmovies.png" no-content /></li>
          <li class="list-inline-item"><social-link link="http://www.hikr.org/user/Stijn" title="Hikr" image="hikr.png" no-content /></li>
          <li class="list-inline-item"><social-link link="http://duolingo.com/#/stijnvermeeren" title="Duolingo" image="duolingo.png" no-content /></li>
          <li class="list-inline-item"><social-link link="https://lichess.org/@/stijnvermeeren" title="Lichess" image="lichess.png" no-content /></li>
          <li class="list-inline-item"><social-link link="https://my.flightradar24.com/stijnvermeeren" title="myFlightradar24" image="myflightradar24.png" no-content /></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
  const route = useRoute();
  const router = useRouter();
  const page = ref(route.query.page)
  const { data, refresh } = await useApiFetch('/stream-api', { query: { page: page } } );

  watch(() => route.query.page, (newValue) => {
    page.value = route.query.page
    refresh()
    router.push({
      path: '/blog',
      query: { page: newValue },
    })
  })

  definePageMeta({
    alias: ['/'],
    activeMenuLink: '/blog'
  })
</script>

<style scoped>
  div.stream-previous {
    float: left;
  }
  div.stream-next {
    float: right;
  }

  div.side-bar {
    margin-top: 10px;
  }

  div.stream-date {
    margin: 2em 0 0.8em;
    padding: 0.2em 1em;
    background-color: #dbdbdb;
    font-weight: bold;
  }
</style>