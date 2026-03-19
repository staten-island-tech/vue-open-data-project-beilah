<template>
  <div v-if="squirrel">
    <h2>Unique Squirrel ID: {{ squirrel.unique_squirrel_id }}</h2>
    <p>Primary Fur Color: {{ squirrel.primary_fur_color }}</p>
    <p>Date: {{ squirrel.date }}</p>
    <p>Age: {{ squirrel.age }}</p>
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
    `https://data.cityofnewyork.us/resource/vfnx-vebw.json?unique_squirrel_id=${encodeURIComponent(id)}`
  )
  const data = await response.json()
  squirrel.value = data[0]
}

onMounted(getSquirrel)
watch(() => route.params.id, getSquirrel)
</script>