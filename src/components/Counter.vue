<script setup lang="ts">
import { ref } from 'vue'
import EditCountModal from './EditCountModal.vue'

defineProps<{ msg: string }>()

const count = ref(0)

// modal visibility state
const modalVisible = ref(false)

function openModal() {
  modalVisible.value = true
}
</script>

<template>
  <h1>{{msg}}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <!-- new button to open modal for editing count -->
    <button type="button" @click="openModal" style="margin-left:12px;">Edit count</button>
  </div>

  <!-- Modal: appears when modalVisible is true -->
  <EditCountModal v-model:visible="modalVisible" v-model:modelValue="count" />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
