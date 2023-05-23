<template>
  <div class="stream-item">
    <div v-if="item.description" class="stream-description">{{item.description}}</div>
    <div :class="['stream-link', {'stream-link-small': !item.link_image_is_large}]">
      <nuxt-link :to="item.link_url"><span></span></nuxt-link>

      <div v-if="item.link_image" class="stream-link-image">
        <img :src="`https://stijnvermeeren.be/stream/${item.link_image}`" alt="Link image" />
      </div>

      <div class="stream-link-title"><a :href="item.link_url">{{item.link_title}}</a></div>
      <div v-if="item.link_description" class="stream-link-description">{{item.link_description}}</div>
      <div class="stream-link-domain">{{item.link_domain}}</div>
      <div style="clear: both"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface StreamItem {
    description?: string,
    link_description?: string,
    link_url?: string,
    link_title?: string,
    link_image?: string,
    link_domain?: string
    link_image_is_large?: boolean
}
const {item} = defineProps<{ item: StreamItem }>()
</script>

<style scoped>
div.stream-link {
  position: relative;
  width: 699px;
  max-width: 95%;
  margin: 1em auto 1.5em;
  background-color: #ebebeb;
}
div.stream-link span {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}
div.stream-link-image img {
  max-width: 100%;
}

div.stream-link-title {
  font-size: 120%;
  font-weight: bold;
  padding: 8px 15px 0;
}
div.stream-link-description {
  padding: 3px 15px 0;
}
div.stream-link-domain {
  font-size: 90%;
  padding: 8px 15px 8px;
  font-style: italic;
}
div.stream-link-small div.stream-link-image {
  float: right;
  margin-left: 1em;
}
</style>