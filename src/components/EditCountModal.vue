<template>
  <div v-show="visible" class="modal-overlay" @click.self="close">
    <div class="modal">
      <h2>Edit count</h2>
      <label>
        Value:
        <input type="number" v-model.number="localValue" />
      </label>
      <div class="modal-actions">
        <button type="button" @click="save">Save</button>
        <button type="button" @click="close">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{ modelValue: number; visible: boolean }>()
const emit = defineEmits(['update:modelValue', 'update:visible'])

const localValue = ref<number | null>(props.modelValue ?? 0)

watch(() => props.visible, (v) => {
  if (v) {
    // populate local value when modal opens
    localValue.value = props.modelValue
  }
})

function save() {
  if (localValue.value !== null && !Number.isNaN(Number(localValue.value))) {
    emit('update:modelValue', Number(localValue.value))
  }
  emit('update:visible', false)
}

function close() {
  emit('update:visible', false)
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  min-width: 280px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}

.modal-actions {
  margin-top: 12px;
  display: flex;
  gap: 8px;
  justify-content: flex-end;
}

.modal input[type="number"] {
  width: 100%;
  margin-top: 6px;
  padding: 6px 8px;
  box-sizing: border-box;
}
</style>
