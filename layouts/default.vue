<template>
  <div class="container">
    <div class="header">
      <div class="row">
        <div class="col-4 col-lg-3 logo">
          <nuxt-link to="/"><span></span></nuxt-link>
          <h1>Stijn Vermeeren</h1>
        </div>
        <div class="col-8 col-lg-9 menu">
          <ul class="list-inline">
            <li v-for="item in menu" :class="['list-inline-item', {active: route.meta.activeMenuLink === item.link}]">
              <nuxt-link :to="item.link">{{item.title}}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="container content">
    <div class="row">
      <div class="col">
        <slot />
      </div>
    </div>
    <div class="row">
      <div class="col attribution">
        Icons from <a href="https://www.flaticon.com/">Flaticon</a>
      </div>
    </div>
  </div>
</template>

<script setup>
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
  .header {
    display: table;
    width: 100%;
  }
  .header .row {
    height: 100%;
    display: table-row;
  }

  .header .row > div {
    display: table-cell;
    float: none;
    vertical-align: bottom;
  }

  .logo {
    background-color: #00aeff;
    position:relative;
  }
  .logo h1 {
    width: 100%;
    bottom: 10px;
    margin-top: 1.2em;
    text-align: center;
    font-size: 26px;
    color: white;
    letter-spacing: 1px;
  }
  .logo span {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .menu ul {
    margin: 0.2em 0;
  }
  .menu ul li a {
    margin-right: 0.5em;
    padding: 0.3em 0.5em;
    display: block;
    color: #4a5054;
    text-decoration: none;
    transition: 0.5s all;
    -webkit-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -o-transition: 0.5s all;
  }
  .menu ul li a:hover, .menu ul li.active a{
    color: #00aeff;
  }

  .content {
    border-top:1px solid #d2d2d2;
    border-bottom:1px solid #d2d2d2;
    padding-top: 1.5em;
    padding-bottom: 1.5em;
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

  @media(min-width: 1200px) {
    .container{
      max-width: 1080px;
    }
  }
  @media(max-width: 992px){
    .logo h1 {
      font-size: 22px;
    }
    .menu ul li a {
      font-size: 90%;
    }
  }
  @media(max-width:768px){
    .logo h1 {
      font-size: 16px;
    }
    .menu ul li a {
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

  /* DIVERSEN */
  h2 img.icon {
    vertical-align: middle;
    margin-right: 0.3em;
  }

  div.homepagediv {
    margin-top: 1em;
  }
  div.homepagediv img.icon {
    float: left;
  }
  div.homepagediv div.fotothumbnail img {
    margin: -0.3em 0 0 2.9em;
  }
  div.homepagediv p, div.homepagediv div.fotothumbnail {
    margin-left: 50px;
    text-align: left;
  }
  div.homepagediv p.goto {
    font-size: 95%;
    margin-top: -0.4em;
    margin-bottom: 0.5em;
  }
  div.homepagediv p.goto img {
    vertical-align: -0.1em;
    margin: 0 0.3em 0 1.1em;
  }
  div.homepagediv p.contact img {
    vertical-align: -0.1em;
    margin: 0 0.3em 0 0;
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