<template>
  <h1>title</h1>
  <h2>subtitle</h2>
  {{ staticsUrl }}
  <p>new text</p>
</template>

<script setup lang="ts">
import { useConfigSite } from '~/composables/useConfigSite';

 
  const { staticsUrl } = useConfigSite();
</script>

<style scoped>

</style>