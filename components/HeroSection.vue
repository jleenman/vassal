<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const manifesto = ref<HTMLElement | null>(null)

let frame = 0

const updateDepth = () => {
  frame = 0
  const element = manifesto.value
  const hero = document.getElementById('home')
  if (!element || !hero) return

  const rect = hero.getBoundingClientRect()
  const depth = Math.min(1, Math.max(0, -rect.top / window.innerHeight))
  element.style.setProperty('--hero-depth', depth.toFixed(3))
}

const scheduleDepthUpdate = () => {
  if (frame) return
  frame = window.requestAnimationFrame(updateDepth)
}

onMounted(() => {
  updateDepth()
  window.addEventListener('scroll', scheduleDepthUpdate, { passive: true })
  window.addEventListener('resize', scheduleDepthUpdate)
})

onBeforeUnmount(() => {
  if (frame) {
    window.cancelAnimationFrame(frame)
  }
  window.removeEventListener('scroll', scheduleDepthUpdate)
  window.removeEventListener('resize', scheduleDepthUpdate)
})
</script>

<template>
  <section id="home" class="vassal-hero text-ink">
    <div class="hero-rays" aria-hidden="true">
      <span v-for="ray in 8" :key="ray" :style="{ '--ray': ray - 1 }" />
    </div>
    <div class="section-shell relative z-10 grid min-h-screen items-center gap-10 pb-20 pt-28 lg:grid-cols-[1fr_0.92fr] lg:pt-32">
      <div class="hero-left">
        <div class="reveal hero-identity">
          <p>Jonathan Leenman / Schiedam / product, systems, code, taste</p>
        </div>
        <div class="reveal zword-wrap" aria-label="VASSAL">
          <div class="zword" aria-hidden="true">
            <span v-for="layer in 9" :key="layer" :style="{ '--layer': layer - 1 }">VASSAL</span>
          </div>
        </div>
        <h1 class="sr-only">Jonathan Leenman - VASSAL</h1>
        <p class="reveal mt-6 max-w-2xl font-display text-4xl font-extrabold leading-[0.96] tracking-normal text-balance md:text-5xl 2xl:text-6xl">
          Anders kijken. Zorgvuldig bouwen. Systemen laten kloppen.
        </p>
      </div>

      <aside ref="manifesto" class="reveal hero-manifesto" aria-label="Korte positionering">
        <div class="signal-diagram" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <p class="eyebrow text-volta">Product / UX / Software / Data</p>
        <p class="mt-5 text-2xl font-black leading-tight text-balance md:text-4xl">
          Geen standaard profiel. Wel iemand die ziet waar een systeem wringt, taal geeft aan het probleem en teams helpt bewegen.
        </p>
        <p class="mt-6 text-lg leading-8 text-ink/76">
          Ik werk tussen product, UX, software, data en nieuwe manieren van bouwen. Niet als laag erboven, maar dicht op het materiaal.
        </p>
        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <a class="signal-button" href="#thinking">Zie hoe ik denk</a>
          <a class="signal-button signal-button-ghost" href="#contact">Start een gesprek</a>
        </div>
      </aside>
    </div>
  </section>
</template>
