<template>
  <h1>NYC Squirrels</h1>
  <div class="chart-wrapper">
    <Radar id="radar" :options="chartOptions" :data="radarData" />
    <Bar id="bar" :options="chartOptions" :data="barData" />
  </div>
  <div class="container">
    <SquirrelCard
      v-for="(squirrel, index) in squirrels"
      :key="squirrel.unique_squirrel_id"
      :squirrel="squirrel"
      :index="index"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Bar, Radar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
)
import SquirrelCard from '@/components/SquirrelCard.vue'

const radarData = ref({ labels: [], datasets: [] })
const barData = ref({ labels: [], datasets: [] })
const chartOptions = ref({ responsive: true })
const squirrels = ref([])

async function getSquirrels() {
  try {
    const response = await fetch(
      'https://data.cityofnewyork.us/resource/vfnx-vebw.json?$limit=1000',
    )
    const data = await response.json()
    squirrels.value = data

    const behaviors = ['running', 'chasing', 'climbing', 'eating', 'foraging']

    const counts = {}
    behaviors.forEach((b) => (counts[b] = 0))

    data.forEach((s) => {
      behaviors.forEach((b) => {
        if (s[b] === true || s[b] === 'true') counts[b]++
      })
    })

    radarData.value = {
      labels: behaviors.map((b) => b.charAt(0).toUpperCase() + b.slice(1)),
      datasets: [
        {
          label: 'Behavior frequency',
          data: behaviors.map((b) => counts[b]),
          backgroundColor: 'rgba(122, 80, 90, 0.4)',
          borderColor: 'rgb(122, 80, 90)',
          pointBackgroundColor: 'rgb(122, 80, 90)',
        },
      ],
    }

    const countColor = {}
    data.forEach((squirrel) => {
      const color = squirrel.primary_fur_color || 'Unknown'
      countColor[color] = (countColor[color] || 0) + 1
    })

    barData.value = {
      labels: Object.keys(countColor),
      datasets: [
        {
          label: 'Most Common Fur Coat Colors in NYC Squirrels',
          data: Object.values(countColor),
          backgroundColor: ['#D3D3D3', '#808080', '#8B4513', '#000000'],
        },
      ],
    }
  } catch (error) {
    console.log(error)
  }
}
onMounted(getSquirrels)
</script>

<style scoped>
.container {
  width: 80vw;
  min-height: 80vw;
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
.chart-wrapper {
  width: 800px;
  margin: 40px auto;
}
</style>