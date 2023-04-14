<template>
  <p>Hello world</p>
</template>

<script>
  definePageMeta({
    alias: ['/blog'],
    activeMenuLink: 'blog'
  })
</script>

<style scoped>
  div.stream-date {
    margin: 2em 0 0.8em;
    padding: 0.2em 1em;
    background-color: #dbdbdb;
    font-weight: bold;
  }

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

  div.stream-previous {
    float: left;
  }
  div.stream-next {
    float: right;
  }

  div.side-bar {
    margin-top: 10px;
  }
  /* Stream */
  div.stream-date {
    margin: 2em 0 0.8em;
    padding: 0.2em 1em;
    background-color: #dbdbdb;
    font-weight: bold;
  }

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

  div.stream-previous {
    float: left;
  }
  div.stream-next {
    float: right;
  }

  div.side-bar {
    margin-top: 10px;
  }
</style>