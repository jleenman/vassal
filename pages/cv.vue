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

const timeline = [
  {
    period: 'Nu',
    title: 'Product, systemen en data',
    body: 'Productrichting, UX, informatiearchitectuur, requirements en moderne software rond monitoring, kaarten, dashboards en analyse.',
  },
  {
    period: 'Web',
    title: 'Freelance software en front-end',
    body: 'Front-end projecten, API-koppelingen, Shopify, WordPress, maatwerk plugins, online tools en technisch advies.',
  },
  {
    period: 'Onderwijs',
    title: 'Docent, coach en examinator',
    body: 'ICT, programmeren, webapplicaties, front-end development en applied game design overdraagbaar maken.',
  },
  {
    period: 'Games',
    title: 'Game design en interactie',
    body: 'Mechanics, feedbackloops, level design, verhaal en interactie voor console-, web- en educatieve games.',
  },
]

const contact = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jonathanleenman/' },
  { label: 'E-mail', href: 'mailto:jonathan@vassal.nl' },
]
</script>

<template>
  <main class="cv-page min-h-screen px-4 py-6 text-night md:py-10">
    <div class="mx-auto max-w-5xl">
      <nav class="cv-nav" aria-label="CV navigatie">
        <NuxtLink class="magnetic-link text-sm font-black" to="/">Terug naar homepage</NuxtLink>
        <div class="hidden gap-4 text-sm font-bold text-night/58 sm:flex">
          <a v-for="link in contact" :key="link.href" class="magnetic-link" :href="link.href">{{ link.label }}</a>
        </div>
      </nav>

      <header class="cv-hero">
        <div>
          <p class="eyebrow">Secondary page</p>
          <h1>CV</h1>
          <p>Een rustig naslagpunt. De hoofdsite vertelt het verhaal; deze pagina houdt de feiten bij elkaar.</p>
        </div>
        <aside aria-label="Kerngegevens">
          <span>Jonathan Leenman</span>
          <strong>Product / UX / Software / Data</strong>
          <span>Schiedam, Nederland</span>
        </aside>
      </header>

      <section class="cv-grid py-10">
        <article class="cv-card cv-card--profile">
          <p class="eyebrow">Profiel</p>
          <h2>Productdenker, builder en systems thinker.</h2>
          <p>
            Ik beweeg tussen product, UX, software, data en nieuwe manieren van bouwen. Mijn kracht zit in complexe materie ordenen, keuzes scherp maken en dicht bij makers blijven.
          </p>
        </article>

        <article class="cv-card">
          <p class="eyebrow">Richting</p>
          <ul>
            <li v-for="item in sections[1]?.items" :key="item">{{ item }}</li>
          </ul>
        </article>
      </section>

      <section class="cv-timeline" aria-labelledby="cv-line-title">
        <div class="cv-section-head">
          <p class="eyebrow">Lijn</p>
          <h2 id="cv-line-title">Ervaring in hoofdlijnen</h2>
        </div>
        <article v-for="item in timeline" :key="item.period" class="cv-timeline__item">
          <p>{{ item.period }}</p>
          <h3>{{ item.title }}</h3>
          <span>{{ item.body }}</span>
        </article>
      </section>

      <section class="cv-skills" aria-labelledby="cv-skill-title">
        <div class="cv-section-head">
          <p class="eyebrow">Werkvelden</p>
          <h2 id="cv-skill-title">Geen balkjes. Wel terugkerende gebieden.</h2>
        </div>
        <div>
          <span v-for="item in sections[3]?.items" :key="item">{{ item }}</span>
        </div>
      </section>

      <footer class="cv-footer">
        <p>Jonathan Leenman</p>
        <div>
          <a v-for="link in contact" :key="link.href" class="magnetic-link" :href="link.href">{{ link.label }}</a>
        </div>
      </footer>
    </div>
  </main>
</template>
