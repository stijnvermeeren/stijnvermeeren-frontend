<template>
  <h2 class="h2">Contact me</h2>

  <v-alert v-if="sent" type="success" variant="tonal">
    Message sent. Thanks!
  </v-alert>
  <div v-else>
    <p>I always appreciate receiving a message :). If you include your own email address, then I will be able to get in touch with you.</p>

    <div>
      <v-alert v-if="errors.length" type="warning" variant="tonal">
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </v-alert>
      <div class="d-none">
        Leave this field empty: <input v-model="subject" type="text" name="subject" />
      </div>
      <v-row :dense="true">
        <v-col cols="12" sm="6">
          <v-text-field v-model="name" label="Your name" />
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field v-model="email" label="Your email address" />
        </v-col>
      </v-row>
      <v-row :dense="true">
        <v-col>
          <v-textarea v-model="message" rows="8" label="Your message"></v-textarea>
        </v-col>
      </v-row>
      <v-row :dense="true">
        <v-col>
          <v-btn @click="send()">Send</v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useApiUri} from "~/composables/useApiUri";

const name = ref("")
const email = ref("")
const subject = ref("")
const message = ref("")
const errors = ref<Array<string>>([])
const sent = ref(false)

async function send() {
  const apiUri = useApiUri()
  interface ResponseType {
      sent: boolean,
      errors: Array<string>
  }
  const response = await $fetch<ResponseType>( 'contact/api', {
    baseURL: apiUri,
    method: 'POST',
    body: {
      'name': name.value,
      'email': email.value,
      'subject': subject.value,
      'message': message.value
    }
  });

  sent.value = response.sent
  errors.value = response.errors
}

useMeta({
  title: 'Contact me'
})

definePageMeta({
  activeMenuLink: '/contact'
})
</script>