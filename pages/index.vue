<script setup lang="ts">
import { assets, contactLinks, impactPatterns, principles, trajectory } from '~/data/siteContent'

useSeoMeta({
  title: 'VASSAL - Jonathan Leenman',
  description:
    'Een persoonlijke homepage over productdenken, UX, software, data, systemen en nieuwe manieren van bouwen.',
  ogTitle: 'VASSAL - Jonathan Leenman',
  ogDescription: 'Product thinker, builder en systems thinker op het snijvlak van product, UX, software en data.',
})
</script>

<template>
  <main>
    <SignalSpine />
    <HeroSection />
    <DifferenceBridge />

    <section id="thinking" class="paper-section relative px-4 py-24 text-night md:py-32">
      <div class="section-shell section-composition">
        <div class="chapter-mark reveal" aria-hidden="true">
          <span>01</span>
          <strong>THINK</strong>
        </div>
        <div>
          <SectionIntro
            kicker="Zo denkt Jonathan"
            title="Niet elke vraag is een feature."
            body="Vaak zit de echte beweging in het model erachter: rollen, data, context, frictie en timing. Ik probeer complexe domeinen terug te brengen tot heldere modellen, betere keuzes en interfaces die logisch voelen."
          />
          <div class="principle-board mt-14">
            <article v-for="principle in principles" :key="principle.kicker" class="reveal principle-card" :data-kicker="principle.kicker">
              <p class="principle-card__kicker">{{ principle.kicker }}</p>
              <h3>{{ principle.title }}</h3>
              <p>{{ principle.body }}</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section id="field" class="relative overflow-hidden bg-graphite px-4 py-24 text-ink md:py-32">
      <div class="section-shell grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div class="reveal relative overflow-hidden rounded-lg">
          <SignalImagePanel
            :src="assets.rotterdam"
            alt="Uitzicht over Rotterdam als contextbeeld voor systemen, stad en infrastructuur"
            caption="Data, plekken, mensen en beslissingen komen samen in producten die helder moeten blijven."
          />
        </div>
        <div>
          <SectionIntro
            dark
            kicker="Actueel werkveld"
            title="Data wordt pas waardevol als mensen ermee kunnen denken."
            body="Mijn huidige werk draait om producten waarin sensordata, geo-informatie, monitoring, dashboards, kaarten en analyse samenkomen. Technische diepte is nodig, maar het product moet voor gebruikers vooral richting geven."
          />
          <div class="reveal mt-10 grid gap-3 sm:grid-cols-2">
            <p class="glass rounded-lg p-5 text-sm leading-6 text-ink/70">API-first software die kan meegroeien zonder dat elk scherm een nieuw eiland wordt.</p>
            <p class="glass rounded-lg p-5 text-sm leading-6 text-ink/70">Visualisaties die niet alleen mooi zijn, maar helpen om beslissingen te nemen.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="trajectory" class="paper-section route-section px-4 py-24 text-night md:py-32">
      <svg class="route-map" viewBox="0 -300 1600 1200" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
        <defs>
          <marker id="route-arrow" markerWidth="16" markerHeight="16" refX="13" refY="8" orient="auto" markerUnits="strokeWidth">
            <path d="M1 1 L15 8 L1 15 Z" />
          </marker>
        </defs>
        <g class="route-map__roads">
          <path d="M-90 760 C170 610 250 360 470 330 S842 462 1020 245 1395 60 1690 160" />
          <path d="M90 1250 C265 1010 515 930 678 730 S840 312 1118 270 1490 335 1710 74" />
          <path d="M125 80 C205 150 248 226 245 330 S182 520 248 612 455 692 518 804 445 1010 528 1165" />
          <path d="M-40 482 C118 434 242 454 338 540 S512 742 668 742 862 624 1008 650 1258 816 1660 785" />
          <path d="M1035 -80 C960 46 925 164 982 276 S1180 438 1168 586 970 770 1018 902 1248 1010 1390 1215" />
        </g>
        <g class="route-map__main">
          <path class="route-map__route-shadow" d="M-80 1010 C112 832 306 770 486 626 S760 438 952 462 1186 620 1390 514 1525 468 1680 516" />
          <path class="route-map__route" d="M-80 1010 C112 832 306 770 486 626 S760 438 952 462 1186 620 1390 514 1525 468 1680 516" />
          <path class="route-map__route-dash" d="M-80 1010 C112 832 306 770 486 626 S760 438 952 462 1186 620 1390 514 1525 468 1680 516" />
          <path class="route-map__spur" d="M250 650 C350 618 414 654 486 626" />
          <path class="route-map__spur" d="M952 462 C1035 526 1110 574 1186 620" />
          <circle class="route-map__stop route-map__stop--gold" cx="486" cy="626" r="18" />
          <circle class="route-map__stop route-map__stop--ring" cx="952" cy="462" r="20" />
          <circle class="route-map__stop route-map__stop--red" cx="1390" cy="514" r="20" />
        </g>
      </svg>
      <div class="section-shell section-composition">
        <div class="chapter-mark reveal" aria-hidden="true">
          <span>03</span>
          <strong>LINE</strong>
        </div>
        <div>
          <SectionIntro
            kicker="De vormende lijn"
            title="Geen rechte lijn. Wel een duidelijke richting."
            body="Games, onderwijs, websoftware en productontwikkeling lijken losse hoofdstukken. Voor mij vormen ze een patroon: systemen begrijpen, mensen meenemen en abstracte ideeen concreet maken."
          />
          <div class="trajectory-list mt-16">
            <article v-for="(item, index) in trajectory" :key="item.label" class="reveal trajectory-item">
              <p class="trajectory-item__index">{{ String(index + 1).padStart(2, '0') }}</p>
              <p class="trajectory-item__label">{{ item.label }}</p>
              <h3>{{ item.title }}</h3>
              <p>{{ item.body }}</p>
            </article>
          </div>
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
          <div v-for="pattern in impactPatterns" :key="pattern" class="reveal glass rounded-lg px-6 py-5 font-display text-2xl font-extrabold text-balance">
            {{ pattern }}
          </div>
        </div>
      </div>
    </section>

    <section id="personal" class="bg-[#f6f1e8] px-4 py-24 text-night md:py-32">
      <div class="section-shell grid items-center gap-12 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <SectionIntro
            kicker="Persoonlijk"
            title="Nieuwsgierig genoeg om te blijven leren. Rustig genoeg om te kiezen."
            body="Ik houd van technologie, maar vooral van wat technologie mogelijk maakt als het goed ontworpen is. Buiten werk ben ik vader van vijf. Dat houdt me scherp over aandacht, prioriteit en eenvoud."
          />
        </div>
        <figure class="personal-portrait reveal">
          <img class="aspect-square rounded-lg object-cover shadow-glass" :src="assets.portrait" alt="Portretfoto van Jonathan Leenman" />
          <figcaption>Here&apos;s to the crazy ones.</figcaption>
        </figure>
      </div>
    </section>

    <section id="contact" class="relative overflow-hidden bg-night px-4 py-24 text-ink md:py-32">
      <div class="section-shell">
        <div class="reveal glass mx-auto max-w-4xl rounded-lg p-8 text-center md:p-14">
          <p class="eyebrow">Contact</p>
          <h2 class="mt-5 font-display text-4xl font-extrabold leading-tight md:text-6xl">Voor gesprekken over product, systemen en nieuwe manieren van bouwen.</h2>
          <div class="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a v-for="link in contactLinks" :key="link.href" class="rounded-lg bg-ink px-6 py-3 text-sm font-extrabold text-night transition hover:bg-signal" :href="link.href">
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
