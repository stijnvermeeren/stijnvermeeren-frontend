<template>
  <v-container class="container px-3 py-0 mx-auto">
    <v-row class="header">
      <v-col class="v-col-5 v-col-sm-4 v-col-md-3 logo">
        <nuxt-link to="/"><span></span></nuxt-link>
        <div class="px-4">
          <h1>Stijn Vermeeren</h1>
        </div>
      </v-col>
      <v-col class="v-col-7 v-col-sm-8 v-col-md-9 menu">
        <div v-for="item in menu" :class="['d-inline-block', {active: route.meta.activeMenuLink === item.link}]">
          <nuxt-link :to="item.link">{{item.title}}</nuxt-link>
        </div>
      </v-col>
    </v-row>
    <v-row class="content my-0 py-4">
      <v-col>
        <slot />
      </v-col>
    </v-row>
    <v-row class="attribution">
      <v-col>
        Icons from <a href="https://www.flaticon.com/">Flaticon</a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  const route = useRoute()

  const menu = [
      {link: '/', title: 'HOME'},
      {link: '/info', title: 'INFO'},
      {link: '/projects', title: 'PROJECTS'},
      {link: '/contact', title: 'CONTACT'}
  ]
</script>

<style>
  body {
    font-family: 'Source Sans Pro', sans-serif !important;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
  }

  p, ul, blockquote {
    margin-bottom: 1rem;
  }

  ul.list-unstyled {
    list-style: none;
    margin-left: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
  }

  h2 {
    font-size: 28px;
  }

  h3 {
    font-size: 24px;
  }

  h4 {
    font-size: 18px;
  }

  ul {
    margin-left: 2em;
  }

  blockquote.citaat {
      margin-left: 3em;
      margin-right: 3em;
      font-size: 90%;
  }
  blockquote.citaat p {
      text-indent: 1em;
      margin: 0.2em 0;
  }

  div.attribution {
    text-align: center;
    font-size: 80%;
    color: #bbb;
    margin-top: 60px;
  }
  div.attribution a {
    color: #bbb !important;
  }

  div.content a {
    color: black;
    text-decoration: underline;
    transition: 0.5s all ease !important;
  }
  div.content a.v-btn {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    color: #00aeff;
  }

  .header .logo {
      align-self: stretch;
  }
  .header .menu {
    align-self: end;
  }

  .logo {
    position: relative;
    padding-top: 0;
  }
  .logo > div {
    background-color: #00aeff;
    height: 100%;
    width: 100%;
    display: inline-flex;
    justify-content: center;
  }
  .logo h1 {
    align-self: end;
    padding-top: 1.6em;
    text-align: center;
    font-size: 26px;
    color: white;
    letter-spacing: 1px;

    margin-bottom: 0.5rem;

    font-weight: 500;
    line-height: 1.2;
  }
  .logo a {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .menu {
    line-height: 1.2;
  }
  .menu div {
    margin: 0.2em 0;
  }
  .menu div a {
    margin-right: 1em;
    margin-top: 0.2em;
    padding: 0.3em 0.5em;
    display: block;
    color: #4a5054;
    text-decoration: none;
    transition: 0.5s all;
    -webkit-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -o-transition: 0.5s all;
  }
  .menu div a:hover, .menu div.active a {
    color: #00aeff;
  }

  .content {
    border-top:1px solid #d2d2d2;
    border-bottom:1px solid #d2d2d2;
  }
  img.foto, div.photocaption {
    float: right;
    max-width: 50%;
    margin-left: 2em;
  }
  div.photocaption img {
    width: 100%;
  }
  div.photocaption p {
    margin-top: 0;
    text-align: center;
    font-size: 90%;
  }

  .container {
    max-width: 1080px;
  }

  @media(min-width: 490px) {
    .container {
      width: 95%;
    }
  }

  @media(max-width: 992px) {
    .logo h1 {
      font-size: 22px;
    }
    .menu a {
      font-size: 90%;
    }
  }
  @media(max-width:768px){
    .logo h1 {
      font-size: 16px;
    }
    .menu a {
      font-size: 80%;
    }
  }
  @media(max-width:480px){
    .logo h1 {
      font-size: 16px;
    }
    .menu ul li a {
      font-size: 75%;
    }
  }

  .floatright {
    float: right;
  }

  div.feedback {
    color: #F0F;
  }

  br.seperator {
    clear: both;
  }

  /* DIVERSEN */
  h2 img.icon {
    vertical-align: middle;
    margin-right: 0.3em;
  }

  p.biofoto {
    margin: 0.7em 0;
    text-align: center;
  }

  div.profiles ul li {
    margin: 0 1em;
  }
  div.profiles ul img {
    border: 0;
    margin: 0 1em 0.2em 0;
    vertical-align: middle;
  }


  /* FOTOS */

  div#foto {
    text-align: center;
    padding: 1em;
  }
  div#foto_info {
    text-align: center;
  }
  div#foto_info table {
    width: 80%;
    margin: 0 auto;
  }
  div#foto_info td {
    width: 25%;
  }
  div#foto_info td.vandaag {
    width: 50%;
  }
  div#foto_info div.beschrijving {
    font-style: italic;
  }


  ul.albums_list {
    display: flex;
    flex-wrap: wrap;
  }
  ul.albums_list li {
    list-style-type: none;
    width: 150px;
    margin: .5em 0 1em 0;
  }
  ul.albums_list.edit li {
    height: 185px;
  }
  ul.albums_list div.album_thumb {
    margin-bottom: 0.1em;
    text-align: center;
  }
  ul.albums_list div.titel {
    font-size: 110%;
    text-align: center;
  }
  ul.albums_list div.periode {
    font-size: 70%;
    text-align: center;
  }

  div.thefoto {
    text-align: center;
    position: relative;
  }

  div#map_locations {
    font-size: 70%;
  }


  div#albumbeschrijving p {
    padding: 0 6em 0.3em 6em;
  }


  div#content p.youtube {
    text-align: center;
  }

  div#content a.nietpubliek {
    color: #b30;
  }

  /* backwards compatible */
  div#content p.poezie, div#content p.citaat {
    text-indent: 0;
    margin-left: 3em;
    margin-right: 3em;
    font-size: 90%;
  }

  p.naar_archief_top {
    float:right;
  }
  p.naar_archief_bottom {
    margin-left: 2em;
  }

  #sphere {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  div#imageviewer {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
  }
</style>