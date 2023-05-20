<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { length } from '../workerAPI'

const n = ref<number>(0)

onMounted(async () => {
  n.value = await length('bp')
})
</script>

<template>
  <div id="container">
    {{ n }}
  </div>
</template>
