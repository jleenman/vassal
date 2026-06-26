<script setup lang="ts">
defineProps<{
  src: string
  alt: string
  caption: string
}>()
</script>

<template>
  <figure class="signal-image reveal">
    <div class="sticky-rail rail-image-top" aria-hidden="true" />
    <img :src="src" :alt="alt" />
    <figcaption>{{ caption }}</figcaption>
    <div class="sticky-rail rail-image-bottom" aria-hidden="true" />
  </figure>
</template>
