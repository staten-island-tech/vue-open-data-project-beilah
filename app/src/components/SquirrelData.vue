<template>
<router-link :to="squirrelPath" class="card">
    <h2>{{ squirrel.unique_squirrel_id }}</h2>
    <h3>{{ primary_fur_color }}</h3>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
    unique_squirrel_id: {
        type: Object,
        required: true,
    },
    primary_fur_color: {
        type: Object,
        required: true,
    }
})
const squirrelPath = computed(() => {
    return `/pkmn/${props.squirrel.unique_squirrel_id}`
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