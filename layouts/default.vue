<template>
  <div class="container">
    <div class="header">
      <div class="row">
        <div class="col-xs-4 col-md-3 logo">
          <nuxt-link to="/"><span></span></nuxt-link>
          <h1>Stijn Vermeeren</h1>
        </div>
        <div class="col-xs-8 col-md-9 menu">
          <ul class="list-inline">
            <li v-for="item in menu">
              <nuxt-link to="item.link">{{item.title}}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="container content">
    <div class="row">
      <div class="col-xs-12 col-lg-9">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
  const menu = [
      {link: 'blog', title: 'HOME'},
      {link: 'info', title: 'INFO'},
      {link: 'projects', title: 'PROJECTS'},
      {link: 'contact', title: 'CONTACT'}
  ]
</script>