<template>
  <h2 class="h2">Contact me</h2>

  <div v-if="sent" class="alert alert-success">
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
        Leave this field empty: <input v-model="subject" type="text" name="subject" />
      </div>
      <div>
        <input v-model="name" type="text" placeholder="Your name" />
        <input v-model="email" type="text" placeholder="Your email address" />
      </div>
      <div>
        <textarea v-model="message" rows="10" cols="50" placeholder="Your message"></textarea>
      </div>
      <div>
        <button type="submit" @click="send()">Send</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const name = ref("")
const email = ref("")
const subject = ref("")
const message = ref("")
const errors = ref([])
const sent = ref(false)

async function send() {
  const config = useRuntimeConfig()
  const {sent, errors} = await $fetch( 'contact/api', {
    baseURL: config.public.apiBase,
    method: 'POST',
    body: {
      'name': this.name,
      'email': this.email,
      'subject': this.subject,
      'message': this.message
    }
  });

  this.sent = sent
  this.errors = errors
}

useHead({
  title: 'Contact me'
})

definePageMeta({
  activeMenuLink: '/contact'
})
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