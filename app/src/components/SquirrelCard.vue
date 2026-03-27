<template>
  <router-link :to="squirrelPath" class="card">
    <h2>Squirrel #{{ index + 1 }}</h2>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  squirrel: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
})
const squirrelPath = computed(() => {
  return `/squirrel/${props.squirrel.unique_squirrel_id}`
})
</script>

<style scoped>
.card {
  width: 20%;
  height: 15%;
  text-align: center;
  background-color: rgb(122, 80, 90);
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  text-transform: uppercase;
}
h2 {
  margin: auto;
  font-family:
    'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: rgb(247, 244, 246);
  text-decoration: none;
  padding: 5px;
  transition: transform 0.2s ease;
}
h2:hover {
  transform: scale(1.1);
}
</style>