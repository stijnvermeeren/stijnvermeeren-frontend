<template>
  <div class="blogPost">
    <h2>Blog: {{post.title}}</h2>
    <p>{{post.published}}</p>
    <div v-html="post.contentHtml"></div>
  </div>
</template>

<script setup>
const route = useRoute();
const { data: post } = await useApiFetch(`/blog-api/${route.params.slug}`);
</script>

<style scoped>
div.blogPost blockquote, blockquote.citaat {
  margin-left: 3em;
  margin-right: 3em;
  font-size: 90%;
}
div.blogPost blockquote p, blockquote.citaat p {
  text-indent: 1em;
  margin: 0.2em 0;
}
div.blogPost blockquote.poezie p {
  text-indent: 0;
  margin: 0.2em 0;
}
div.blogPost blockquote p span.ellips {
  color: #666;
  font-size:  70%;
}
div.blogPost blockquote p.source {
  text-align: right;
  font-style: italic;
  margin-right: 3em;
}
div.blogPost p.youtube {
  text-align: center;
}
div.blogPost p.blogfoto {
  text-align: center;
}
</style>