<script setup lang="ts">
useSeoMeta({
  title: 'CV - Jonathan Leenman',
  description: 'Rustig CV-naslagpunt voor Jonathan Leenman.',
})

const sections = [
  {
    title: 'Profiel',
    items: ['Productdenker en builder met ervaring in productontwikkeling, UX, softwareontwikkeling, onderwijs, webdevelopment en game design.'],
  },
  {
    title: 'Huidige richting',
    items: [
      'Product ownership en productvisie',
      'UX en informatiearchitectuur',
      'Softwareconcepten en requirements',
      'Dashboards, kaarten, visualisaties en dataproducten',
      'Samenwerken met developers',
      'Moderne tooling in analyse, documentatie en ontwikkelprocessen',
    ],
  },
  {
    title: 'Ervaring in hoofdlijnen',
    items: [
      'Product en software rond data, monitoring, visualisatie, kaarten, API’s en dashboards',
      'Freelance front-end, API-koppelingen, Shopify, WordPress, maatwerk plugins en online tools',
      'Onderwijs als docent, coach, coordinator en examinator in ICT, webapplicaties, programmeren en applied game design',
      'Game design, level design, mechanics, verhaal en interactie voor console-, web- en educatieve games',
    ],
  },
  {
    title: 'Vaardigheden',
    items: [
      'Product management',
      'UX',
      'Informatiearchitectuur',
      'Front-end development',
      'Vue, Nuxt, TypeScript',
      'Laravel, PHP',
      'API’s',
      'Datavisualisatie',
      'Mapping en geodata',
      'Onderwijs, coaching en communicatie',
    ],
  },
]
</script>

<template>
  <main class="min-h-screen bg-[#f7f4ec] px-4 py-10 text-night">
    <div class="mx-auto max-w-4xl">
      <NuxtLink class="magnetic-link text-sm font-bold" to="/">Terug naar homepage</NuxtLink>
      <header class="mt-16 border-b border-night/12 pb-10">
        <p class="eyebrow">Secondary page</p>
        <h1 class="mt-4 font-display text-6xl font-extrabold leading-none md:text-8xl">CV</h1>
        <p class="mt-5 max-w-2xl text-lg leading-8 text-night/68">Een rustig naslagpunt. De hoofdsite vertelt het verhaal; deze pagina houdt de feiten bij elkaar.</p>
      </header>
      <section class="py-10">
        <article v-for="section in sections" :key="section.title" class="border-b border-night/10 py-8">
          <h2 class="font-display text-2xl font-extrabold">{{ section.title }}</h2>
          <ul class="mt-5 grid gap-3 text-night/70">
            <li v-for="item in section.items" :key="item" class="leading-7">{{ item }}</li>
          </ul>
        </article>
      </section>
    </div>
  </main>
</template>
