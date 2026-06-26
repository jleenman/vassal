<script setup lang="ts">
defineProps<{
  kicker: string
  title: string
  body: string
  dark?: boolean
}>()
</script>

<template>
  <div class="reveal max-w-3xl">
    <p class="eyebrow">{{ kicker }}</p>
    <h2 class="mt-4 font-display text-4xl font-extrabold leading-tight tracking-normal text-balance md:text-6xl" :class="dark ? 'text-ink' : 'text-night'">
      {{ title }}
    </h2>
    <p class="mt-5 text-lg leading-8" :class="dark ? 'text-ink/68' : 'text-night/68'">
      {{ body }}
    </p>
  </div>
</template>
