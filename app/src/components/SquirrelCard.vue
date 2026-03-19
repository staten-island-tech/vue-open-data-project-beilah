<template>
  <router-link :to="squirrelPath" class="card">
    <h2>{{ squirrel.unique_squirrel_id }}</h2>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  squirrel: {
    type: Object,
    required: true,
  },
})
const squirrelPath = computed(() => {
  return `/squirrel/${props.squirrel.unique_squirrel_id}`
})
</script>

<style scoped>
.card {
  width: 28%;
  height: 500px;
  background-color: aliceblue;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  text-transform: uppercase;
}
</style>
