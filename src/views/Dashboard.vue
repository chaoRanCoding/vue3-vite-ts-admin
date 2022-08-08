<script setup lang="ts">
const store = useStore();
const name = computed(() => store.state["account"].name);
</script>

<template>
  <div>welcome, {{ name }}!</div>
</template>
