<template>
  <div class="blogPost">
    <h2>Blog: {{post.title}}</h2>
    <p>{{post.published}}</p>
    <div v-html="post.contentHtml"></div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

interface Blog {
    title: string,
    contentHtml: string,
    published: string
}
const { data: post }: { data: Ref<Blog> } = await useApiFetch(`/blog-api/${route.params.slug}`);

useMeta({
  title: `Blog: ${post.value.title}`
})
</script>

<style scoped>
div.blogPost blockquote {
  margin-left: 3em;
  margin-right: 3em;
  font-size: 90%;
}
div.blogPost blockquote p {
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