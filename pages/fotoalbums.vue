<template>
  <v-row>
    <v-col>
      <h2>Fotoalbums</h2>
    </v-col>
    <v-col>
      <v-sheet max-width="400" class="ml-auto">
        <v-autocomplete
            v-model="countryFilter"
            :items="countries"
            item-title="name"
            item-value="code"
            :custom-filter="customAutocompleteFilter"
            clearable
            persistent-clear
            density="compact"
            label="Filter op land"
        />
      </v-sheet>
    </v-col>
  </v-row>
  <ul v-if="visibleAlbums.length" class="albums_list">
    <li v-for="album in visibleAlbums">
      <div v-if="album.thumbnail_link" class="album_thumb">
        <nuxt-link :to="album.link">
          <v-img :src="album.thumbnail_link" :alt="album.thumbnail_title" width="150" height="90" />
        </nuxt-link>
      </div>
      <div class="titel"><nuxt-link :to="album.link">{{album.title}}</nuxt-link></div>
      <div class="periode">{{album.time_range}}</div>
    </li>
  </ul>
  <p v-else>Geen fotoalbum's gevonden.</p>
</template>

<script setup lang="ts">
interface Album {
    link: string,
    title: string,
    time_range: string,
    country_codes: Array<string>,
    thumbnail_link?: string,
    thumbnail_title?: string
}
const { data: albums }: { data: Ref<Array<Album>> } = await useApiFetch('/foto/api')

function customAutocompleteFilter(itemTitle: string, queryText: string, item: {raw: {name: string, aliases?: string}}) {
  const query = queryText.toLowerCase()
  const titleMatch = itemTitle.toLowerCase().indexOf(query)
  if (titleMatch > -1) {
    return titleMatch
  } else {
    if (item.raw.aliases) {
      return item.raw.aliases.toLowerCase().indexOf(query) > -1
    } else {
      return false
    }
  }
}

const countries = [
    { code: 'ar', name: 'Argentinië' },
    { code: 'be', name: 'België' },
    { code: 'bo', name: 'Bolivië' },
    { code: 'bg', name: 'Bulgarije' },
    { code: 'kh', name: 'Cambodja' },
    { code: 'ca', name: 'Canada' },
    { code: 'cl', name: 'Chile' },
    { code: 'cr', name: 'Costa Rica' },
    { code: 'dk', name: 'Denemarken' },
    { code: 'de', name: 'Duitsland' },
    { code: 'ec', name: 'Ecuador' },
    { code: 'fr', name: 'Frankrijk' },
    { code: 'hu', name: 'Hongarije' },
    { code: 'ie', name: 'Ierland' },
    { code: 'is', name: 'IJsland' },
    { code: 'in', name: 'India' },
    { code: 'it', name: 'Italië' },
    { code: 'la', name: 'Laos' },
    { code: 'li', name: 'Liechtenstein' },
    { code: 'lu', name: 'Luxemburg' },
    { code: 'my', name: 'Maleisië' },
    { code: 'mu', name: 'Mauritius' },
    { code: 'mm', name: 'Myanmar' },
    { code: 'nl', name: 'Nederland' },
    { code: 'no', name: 'Noorwegen' },
    { code: 'at', name: 'Oostenrijk' },
    { code: 'pt', name: 'Portugal' },
    { code: 'sk', name: 'Slovakije' },
    { code: 'es', name: 'Spanje' },
    { code: 'cz', name: 'Tsjechië' },
    { code: 'th', name: 'Thailand' },
    { code: 'gb', name: 'Verenigd Koninkrijk', aliases: 'Engeland, Wales, Schotland, Noord-Ierland' },
    { code: 'us', name: 'Verenigde Staten' },
    { code: 'se', name: 'Zweden' },
    { code: 'ch', name: 'Zwitserland' },
]

const route = useRoute()
const countryFilter = ref<string | undefined>(route.query.country ? route.query.country.toString() : undefined)

const router = useRouter()
watch(countryFilter, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    router.push({
      query: { country: newValue }
    })
  }
})

watch(
  () => route.query.country,
  (newValue, oldValue) => {
    if (newValue !== countryFilter.value) {
      countryFilter.value = newValue ? newValue.toString() : undefined
    }
  }
);

const visibleAlbums = computed(() => {
  const filterValue = countryFilter.value
  if (filterValue && albums.value) {
    return albums.value.filter(album => album.country_codes.includes(filterValue))
  } else {
    return albums.value || []
  }
})

useMeta({
  title: 'Fotoalbums'
})
</script>