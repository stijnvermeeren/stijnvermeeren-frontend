<template>
  <h2 class="h2">Contact me</h2>

  <div v-if="success" class="alert alert-success">
    Message sent. Thanks!
  </div>
  <div v-else>
    <p>I always appreciate receiving a message :). If you include your own email address, then I will be able to get in touch with you.</p>

    <div class="contactForm">
      <div v-if="errors.length" class="alert alert-warning">
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </div>
      <div class="d-none">
        Leave this field empty: <input type="text" name="subject" />
      </div>
      <div>
        <input name="name" type="text" placeholder="Your name" />
        <input name="email" type="text" placeholder="Your email address" />
      </div>
      <div>
        <textarea name="message" rows="10" cols="50" placeholder="Your message"></textarea>
      </div>
      <div>
        <button type="submit" @click="send()">Send</button>
      </div>
    </div>
  </div>
</template>

<script setup>
  useHead({
    title: 'Contact me'
  })

  definePageMeta({
    activeMenuLink: 'contact'
  })
</script>

<script>
export default {
  data() {
    return {
      errors: [],
      success: false
    }
  },
  methods: {
    send() {

    }
  }
}
</script>

<style scoped>
  div.contactForm input, div.contactForm button {
    padding: 0.2em;
    margin: 0.2em 1%;
  }
  div.contactForm input[type='text'] {
    width: 38.8%;
  }
  div.contactForm textarea {
    width: 80%;
    padding: 0.2em;
    margin: 0.2em 1%;
  }
</style>