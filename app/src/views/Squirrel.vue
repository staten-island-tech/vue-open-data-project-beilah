<template>
  <div class="container">
    <h1>NYC Squirrels</h1>
    <SquirrelCard
      v-for="(squirrel, index) in squirrels"
      :key="squirrel.unique_squirrel_id"
      :squirrel="squirrel"
      :index="index"
    />
  </div>
  <Bar
    id="chart"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import SquirrelCard from '@/components/SquirrelCard.vue'

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ 'January', 'February', 'March' ],
        datasets: [ { data: [40, 20, 12] } ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
  

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
  height: 80vw;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}
h1 {
  font-size: 50px;
  font-family:
    'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  width: 100%;
  font-style: italic;
  text-align: center;
}
</style>
