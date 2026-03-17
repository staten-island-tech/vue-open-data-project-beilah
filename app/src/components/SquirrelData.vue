<template>
    <h2></h2>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
    squirrel: {
        type: Object,
        required: true,
    },
    id: {
        type: Number,
        required: true,
    }
})
</script>

<style scoped>

</style>