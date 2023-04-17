<template>
  <h2><nuxt-link to="/fotoalbums">Fotoalbum</nuxt-link>: {{album.title}}</h2>

  <div id="albumlijst">
    <div v-if="album.description" id="albumbeschrijving">{{album.description}}</div>
    <p v-if="album.time_range" id="albumperiode">{{album.time_range}}</p>

    <div id="gallery" class="gallery">
      <div class="pswp-gallery__item" v-for="photo in album.photos" :key="photo.link">
        <a :href="photo.link" ref="noreferrer" :data-pswp-width="photo.width" :data-pswp-height="photo.height">
          <img :src="photo.thumbnail_link" itemprop="thumbnail" :alt="photo.title" />
        </a>

        <div class="pswp-caption-content">
          <div class="caption">
            <div v-if="photo.panorama" class="panorama">
              <nuxt-link :to="photo.panorama_link" target="_blank">
                <img src="/images/panorama.png" alt="Panorama" /> Bekijk dit panorama in hoge resolutie.
              </nuxt-link>
            </div>
            <div v-if="photo.sphere" class="panorama">
              <nuxt-link :to="photo.sphere_link" target="_blank">
                <img src="/images/sphere-icon.png" alt="Panorama" /> Bekijk deze foto als interactief 360°-panorama.
              </nuxt-link>
            </div>

            <div class="title">{{photo.title}}</div>

            <div v-if="photo.description" class="description">
              <vue-markdown :source="photo.description" />
            </div>
            <div class="location"><strong>Plaats</strong>: {{ photo.location }} (<nuxt-link :to="photo.google_link">Google Maps</nuxt-link>)</div>
            <div class="time"><strong>Tijdstip</strong>: {{photo.datetime}}</div>
          </div>
        </div>
      </div>
    </div>

    <br style="clear:both;" />
  </div>
</template>

<script setup>
import VueMarkdown from 'vue-markdown-render'
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipeDynamicCaption from "photoswipe-dynamic-caption-plugin";
import 'photoswipe/style.css';
import 'photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css'

const route = useRoute();
const { data: album } = await useApiFetch(`/fotoalbum-api/${route.params.slug}`);

let lightbox;

onMounted(() => {
  if (!lightbox) {
    lightbox = new PhotoSwipeLightbox({
      gallerySelector: '#gallery',
      childSelector: '.pswp-gallery__item',
      pswpModule: () => import('photoswipe'),
      loop: false
    });
    new PhotoSwipeDynamicCaption(lightbox, {
      type: 'below',
    });

    lightbox.init();
  }
});

onUnmounted(() => {
  if (lightbox) {
    lightbox.destroy();
    lightbox = null;
  }
});

useMeta({
  title: `Fotoalbum: ${album.value.title}`,
  description: album.value.time_range,
  image: album.value.ogImage
})
</script>

<style scoped>
  div.gallery > div {
    float: left;
    list-style-type: none;
    width: 165px;
    height: 100px;
    margin: .5em 0 0.5em 0;
    text-align: center;
  }

  div.caption {
    max-width: 420px;
    margin: 0 auto;
  }

  div.caption a {
    color: #8888ff;
  }
  div.caption a.extern {
    color: #8888ff;
  }

  div.caption div.title {
    font-weight: bold;
    margin-bottom: 0.3em;
  }

  div.caption div.description {
    font-size: 95%;
    margin-bottom: 0.3em;
  }

  div.caption div.location {
    font-size: 85%;
  }
  div.caption div.time {
    font-size: 85%;
    margin-bottom: 0.3em;
  }

  div.panorama img {
    vertical-align: middle;
    margin: 0 1em;
  }
  div.panorama a {
    border: 1px solid darkgray;
    border-radius: 3px;
    text-decoration: none;
    display: block;
    line-height: 40px;
    width: 30em;
    padding: 0.1em 0;
    margin: 0 auto 1.5em auto;
  }
  div.panorama a:hover {
    background-color: #181818;
  }
</style>