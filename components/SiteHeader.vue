<script setup lang="ts">
import { navItems } from '~/data/siteContent'
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 px-4 pt-4">
    <nav
      class="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-white/10 bg-night/45 px-4 py-3 text-sm text-ink/82 shadow-glass backdrop-blur-xl"
      aria-label="Hoofdnavigatie"
    >
      <NuxtLink to="/" class="font-display text-base font-extrabold tracking-tight">JL</NuxtLink>
      <div class="hidden items-center gap-6 md:flex">
        <a v-for="item in navItems" :key="item.href" class="magnetic-link" :href="item.href">{{ item.label }}</a>
      </div>
      <a class="rounded-full bg-ink px-4 py-2 text-xs font-bold text-night transition hover:bg-signal" href="#contact">
        Gesprek
      </a>
    </nav>
  </header>
</template>
