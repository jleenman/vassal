<script setup lang="ts">
defineProps<{
  src: string
  alt: string
  caption: string
}>()
</script>

<template>
  <figure class="signal-image reveal" tabindex="0">
    <div class="sticky-rail rail-image-top" aria-hidden="true">
      <span class="rail-segment rail-segment--red" />
      <span class="rail-segment rail-segment--gold" />
      <span class="rail-segment rail-segment--dark" />
    </div>
    <img :src="src" :alt="alt" />
    <figcaption>{{ caption }}</figcaption>
    <div class="sticky-rail rail-image-bottom" aria-hidden="true">
      <span class="rail-segment rail-segment--red" />
      <span class="rail-segment rail-segment--gold" />
      <span class="rail-segment rail-segment--dark" />
    </div>
  </figure>
</template>
