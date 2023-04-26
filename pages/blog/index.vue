<template>
  <div v-if="data" class="row">
    <div class="col">
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
  </div>
</template>

<script setup>
  const route = useRoute();
  const router = useRouter();
  const page = ref(route.query.page || 1)
  const { data, refresh } = await useApiFetch('/stream-api', { query: { page: page } } );

  watch(() => route.query.page, (newValue) => {
    page.value = route.query.page
    refresh()
    router.push({
      path: '/blog',
      query: { page: newValue },
    })
  })

  useMeta({
    title: 'Blog'
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

  div.side-bar h3 {
    font-size: 120%;
    margin-top: 1em;
  }

  div.side-bar p {
    margin-bottom: 3em;
  }

  div.side-bar-profiles {
    text-align: center;
  }

  div.side-bar-profiles > div {
    display: inline-block;
  }

  div.side-bar-profiles :deep(img) {
    margin: 6px;
    padding: 3px;
  }

  div.stream-date {
    margin: 2em 0 0.8em;
    padding: 0.2em 1em;
    background-color: #dbdbdb;
    font-weight: bold;
  }
</style>