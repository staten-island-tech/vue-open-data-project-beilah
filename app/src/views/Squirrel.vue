<template>
    <div class="container">
        <h1>NYC Squirrels</h1>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SquirrelData from '@/components/SquirrelData.vue'
const squirrel = ref([])
async function getSquirrel() {
    try {
        const response = await fetch('https://data.cityofnewyork.us/resource/vfnx-vebw.json?$limit=5000')
        const data = await response.json()
        squirrel.value = data
    } catch (error) {
        console.log(error)
    }
}
onMounted(() => {
    getSquirrel()
})
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