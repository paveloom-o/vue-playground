<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);

function open() {
  isOpen.value = true;
}

function close() {
  isOpen.value = false;
}

defineExpose({
  open,
  close
});
</script>

<template>
  <div v-if="isOpen">
    Modal
  </div>
</template>
