<template>
  <h2>Fotoalbums</h2>
  <ul v-if="albums.length" class="albums_list">
    <li v-for="album in albums">
      <div v-if="album.thumbnail_link" class="album_thumb">
        <nuxt-link :to="album.link">
          <img :src="album.thumbnail_link" :alt="album.thumbnail_title" />
        </nuxt-link>
      </div>
      <div class="titel"><nuxt-link :to="album.link">{{album.title}}</nuxt-link></div>
      <div class="periode">{{album.time_range}}</div>
    </li>
  </ul>
</template>

<script setup>
const { data: albums } = await useApiFetch('/foto/api');

useHead({
  title: 'Fotoalbums'
})
</script>