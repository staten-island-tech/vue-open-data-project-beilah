<template>
    <div class="container">
        <h1>bye</h1>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SquirrelData from '@/components/SquirrelData.vue'
const squirrel = ref([])
async function getSquirrel() {
    try {
        const response = await fetch('https://data.cityofnewyork.us/resource/vfnx-vebw.json')
        const data = await response.json()
        squirrel.value = data.results
    } catch (error) {
        console.log(error)
    }
}
onMounted(() => {
    getSquirrel()
})
</script>

<style scoped>

</style>