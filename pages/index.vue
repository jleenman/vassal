<script setup lang="ts">
import { assets, contactLinks, impactPatterns, principles, trajectory } from '~/data/siteContent'

useSeoMeta({
  title: 'Jonathan Leenman - The difference maker',
  description:
    'Een persoonlijke homepage over productdenken, UX, software, data, systemen en nieuwe manieren van bouwen.',
  ogTitle: 'Jonathan Leenman - The difference maker',
  ogDescription: 'Product thinker, builder en systems thinker op het snijvlak van product, UX, software en data.',
})
</script>

<template>
  <main>
    <SiteHeader />
    <HeroSection />

    <section id="thinking" class="relative bg-[#f7f4ec] px-4 py-24 text-night md:py-32">
      <div class="section-shell">
        <SectionIntro
          kicker="Zo denkt Jonathan"
          title="Niet elke vraag is een feature."
          body="Vaak zit de echte beweging in het model erachter: rollen, data, context, frictie en timing. Ik probeer complexe domeinen terug te brengen tot heldere modellen, betere keuzes en interfaces die logisch voelen."
        />
        <div class="mt-14 grid gap-4 md:grid-cols-2">
          <article v-for="principle in principles" :key="principle.kicker" class="reveal light-panel rounded-[28px] p-7">
            <p class="text-sm font-extrabold uppercase tracking-[0.16em] text-night/42">{{ principle.kicker }}</p>
            <h3 class="mt-5 font-display text-2xl font-extrabold leading-tight">{{ principle.title }}</h3>
            <p class="mt-4 leading-7 text-night/64">{{ principle.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <section id="field" class="relative overflow-hidden bg-night px-4 py-24 text-ink md:py-32">
      <div class="absolute left-1/2 top-0 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-signal/10 blur-3xl" />
      <div class="section-shell grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div class="reveal relative overflow-hidden rounded-[34px]">
          <img class="aspect-[4/5] h-full w-full object-cover opacity-88" :src="assets.rotterdam" alt="Uitzicht over Rotterdam als contextbeeld voor systemen, stad en infrastructuur" />
          <div class="absolute inset-0 bg-gradient-to-t from-night via-night/20 to-transparent" />
          <div class="absolute bottom-6 left-6 right-6 glass rounded-3xl p-5">
            <p class="text-sm leading-6 text-ink/72">Data, plekken, mensen en beslissingen komen samen in producten die helder moeten blijven.</p>
          </div>
        </div>
        <div>
          <SectionIntro
            dark
            kicker="Actueel werkveld"
            title="Data wordt pas waardevol als mensen ermee kunnen denken."
            body="Mijn huidige werk draait om producten waarin sensordata, geo-informatie, monitoring, dashboards, kaarten en analyse samenkomen. Technische diepte is nodig, maar het product moet voor gebruikers vooral richting geven."
          />
          <div class="reveal mt-10 grid gap-3 sm:grid-cols-2">
            <p class="glass rounded-3xl p-5 text-sm leading-6 text-ink/70">API-first software die kan meegroeien zonder dat elk scherm een nieuw eiland wordt.</p>
            <p class="glass rounded-3xl p-5 text-sm leading-6 text-ink/70">Visualisaties die niet alleen mooi zijn, maar helpen om beslissingen te nemen.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="trajectory" class="bg-[#f7f4ec] px-4 py-24 text-night md:py-32">
      <div class="section-shell">
        <SectionIntro
          kicker="De vormende lijn"
          title="Geen rechte lijn. Wel een duidelijke richting."
          body="Games, onderwijs, websoftware en productontwikkeling lijken losse hoofdstukken. Voor mij vormen ze een patroon: systemen begrijpen, mensen meenemen en abstracte ideeen concreet maken."
        />
        <div class="mt-16 grid gap-4">
          <article v-for="item in trajectory" :key="item.label" class="reveal grid gap-4 border-t border-night/12 py-7 md:grid-cols-[180px_1fr_1.15fr]">
            <p class="font-display text-2xl font-extrabold text-night/34">{{ item.label }}</p>
            <h3 class="font-display text-2xl font-extrabold leading-tight">{{ item.title }}</h3>
            <p class="leading-7 text-night/64">{{ item.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-night px-4 py-24 text-ink md:py-32">
      <div class="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionIntro
            dark
            kicker="Impact"
            title="Verschil maken zonder veel lawaai."
            body="Uit oude samenwerkingen komt steeds hetzelfde beeld naar voren: kritisch, betrouwbaar, technisch scherp, helder in communicatie en sterk wanneer werk richting nodig heeft."
          />
        </div>
        <div class="grid gap-3">
          <div v-for="pattern in impactPatterns" :key="pattern" class="reveal glass rounded-3xl px-6 py-5 font-display text-2xl font-extrabold text-balance">
            {{ pattern }}
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#f7f4ec] px-4 py-24 text-night md:py-32">
      <div class="section-shell grid items-center gap-12 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <SectionIntro
            kicker="Persoonlijk"
            title="Nieuwsgierig genoeg om te blijven leren. Rustig genoeg om te kiezen."
            body="Ik houd van technologie, maar vooral van wat technologie mogelijk maakt als het goed ontworpen is. Buiten werk ben ik vader van vijf. Dat houdt me scherp over aandacht, prioriteit en eenvoud."
          />
        </div>
        <img class="reveal aspect-square rounded-[34px] object-cover shadow-glass" :src="assets.portrait" alt="Portretfoto van Jonathan Leenman" />
      </div>
    </section>

    <section id="contact" class="relative overflow-hidden bg-night px-4 py-24 text-ink md:py-32">
      <div class="section-shell">
        <div class="reveal glass mx-auto max-w-4xl rounded-[38px] p-8 text-center md:p-14">
          <p class="eyebrow">Contact</p>
          <h2 class="mt-5 font-display text-4xl font-extrabold leading-tight md:text-6xl">Voor gesprekken over product, systemen en nieuwe manieren van bouwen.</h2>
          <div class="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a v-for="link in contactLinks" :key="link.href" class="rounded-full bg-ink px-6 py-3 text-sm font-extrabold text-night transition hover:bg-signal" :href="link.href">
              {{ link.label }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <SiteFooter />
    <ScrollReveals />
  </main>
</template>
