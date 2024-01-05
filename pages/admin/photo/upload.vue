<template lang="pug">
h3 Admin: photo upload

div
  v-file-input(v-model="files" label="Photos" multiple)
div
  v-btn(@click="submit") Upload
</template>

<script setup>
import {useApiFetch} from "~/composables/useApiFetch";

definePageMeta({ middleware: 'admin' })

const {withAccessToken} = useAuth()

const files = ref([])

async function submit() {
  if (files.value.length) {
    let formData = new FormData();

    for (let file of files.value) {
      formData.append("files[]", file, file.name);
    }

    await useApiFetch("/admin-api/upload", withAccessToken({
      query: {
        'album_id': 510
      },
      method: 'POST',
      body: formData
    }))
  }
}

</script>
