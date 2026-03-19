<template>
  <div class="container">
    <h1>NYC Squirrels</h1>
    <SquirrelCard
      v-for="squirrel in squirrels"
      :key="squirrel.unique_squirrel_id"
      :squirrel="squirrel"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SquirrelCard from '@/components/SquirrelCard.vue'

const squirrels = ref([])

async function getSquirrels() {
  try {
    const response = await fetch(
      'https://data.cityofnewyork.us/resource/vfnx-vebw.json?$limit=1000',
    )
    const data = await response.json()
    squirrels.value = data
  } catch (error) {
    console.log(error)
  }
}
onMounted(getSquirrels)
</script>

<style scoped>
.container {
  width: 80vw;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
</style>
