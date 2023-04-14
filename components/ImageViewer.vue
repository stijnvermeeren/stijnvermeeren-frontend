<template>
  <div id="imageviewer-zoom">
    <img src="/images/panorama/zoomin.png" alt="zoom in" @click="zoomIn">
    <img src="/images/panorama/zoomout.png" alt="zoom out" @click="zoomOut">
  </div>
  <div id="imageviewer"></div>
</template>

<script setup>
import {ImageViewer} from "iv-viewer";
import 'iv-viewer/dist/iv-viewer.css';

const {image} = defineProps({
  image: String
})

let viewer;
let zoom = 100;

onMounted(() => {
  const container = document.querySelector('#imageviewer');
  viewer = new ImageViewer(container);
  viewer.load(`https://s3.eu-central-1.amazonaws.com/fotos.stijnvermeeren.be/panorama/${image}`);
});

function zoomIn() {
  viewer.zoom(viewer._state.zoomValue * 1.25)
}

function zoomOut() {
  viewer.zoom(viewer._state.zoomValue / 1.25)
}
</script>

<style scoped>
div#imageviewer {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}
div#imageviewer-zoom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 100;
}
div#imageviewer-zoom img {
  cursor: pointer;
  margin: 10px 2px;
}
</style>