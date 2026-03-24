<template>
  <div v-if="squirrel">
    <h2>Unique Squirrel ID: {{ squirrel.unique_squirrel_id }}</h2>
    <p>Primary Fur Color: {{ squirrel.primary_fur_color || 'Unknown' }}</p>
    <p>Date: {{ squirrel.date?.toString().replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3') }}</p>
    <p>Age: {{ squirrel.age || 'Unknown' }}</p>
    <p v-if="squirrel.geocoded_column">
      Coordinates: {{ squirrel.geocoded_column.coordinates[1] }},
      {{ squirrel.geocoded_column.coordinates[0] }}
    </p>
  </div>
  <div v-else>Loading...</div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const squirrel = ref(null)

async function getSquirrel() {
  const id = route.params.id
  const response = await fetch(
    `https://data.cityofnewyork.us/resource/vfnx-vebw.json?unique_squirrel_id=${encodeURIComponent(id)}`,
  )
  const data = await response.json()
  squirrel.value = data[0]
}

onMounted(getSquirrel)
watch(() => route.params.id, getSquirrel)
</script>
