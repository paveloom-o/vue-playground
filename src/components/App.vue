<script setup lang="ts">
import { useTemplateRef } from "vue";

import Modal from "@/components/Modal.vue";

const modal = useTemplateRef<InstanceType<typeof Modal>>("modal");

function close() {
  modal.value?.close();
}
</script>

<template>
  <button @click="modal?.open!">
    Open modal
  </button>
  <button @click="close">
    Close modal
  </button>
  <Teleport to="body">
    <Modal ref="modal" />
  </Teleport>
</template>
