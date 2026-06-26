<script setup lang="ts">
import vassalLogo from '~/content/assets/vassal-logo.png'
</script>

<template>
  <section class="vassal-hero text-ink">
    <div class="signal-bar signal-bar-bottom" aria-hidden="true" />
    <div class="section-shell relative z-10 grid min-h-screen items-center gap-10 pb-20 pt-28 lg:grid-cols-[1fr_0.92fr] lg:pt-32">
      <div class="hero-left">
        <div class="reveal hero-identity">
          <img :src="vassalLogo" alt="" aria-hidden="true" />
          <p>Jonathan Leenman / Schiedam / product, systems, code, taste</p>
        </div>
        <div class="reveal zword-wrap" aria-label="VASSAL">
          <div class="zword" aria-hidden="true">
            <span v-for="layer in 9" :key="layer" :style="{ '--layer': layer - 1 }">VASSAL</span>
          </div>
        </div>
        <h1 class="sr-only">Jonathan Leenman - VASSAL</h1>
        <p class="reveal mt-7 max-w-2xl font-display text-4xl font-extrabold leading-[0.96] tracking-normal text-balance md:text-6xl">
          Anders kijken. Zorgvuldig bouwen. Systemen laten kloppen.
        </p>
      </div>

      <aside class="reveal hero-manifesto" aria-label="Korte positionering">
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
