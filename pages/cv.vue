<script setup lang="ts">
useSeoMeta({
  title: 'CV - Jonathan Leenman',
  description: 'Uitgebreid CV van Jonathan Leenman met werkervaring, projecten, opleiding en vaardigheden.',
})

const contact = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jonathanleenman/' },
  { label: 'E-mail', href: 'mailto:jonathan@vassal.nl' },
]

const profile = [
  'Jonathan Leenman is een productdenker en builder met ervaring in productontwikkeling, UX, softwareontwikkeling, onderwijs, webdevelopment en game design.',
  'Na het VWO startte hij met Industrieel Ontwerpen aan de TU Delft en stapte daarna over naar Gamedesign in Amsterdam. Die combinatie van ontwerpen, techniek, interactie en systemen loopt sindsdien door zijn werk.',
  'Hij bouwde ervaring op in de game-industrie, werkte ruim acht jaar in het onderwijs op MBO- en HBO-niveau en verschoof daarna zijn focus naar front-end development, websoftware en productontwikkeling.',
]

const facts = [
  { label: 'Locatie', value: 'Schiedam, Nederland' },
  { label: 'Werkveld', value: 'Product / UX / Software / Data' },
  { label: 'Basis', value: 'Games, onderwijs, webdevelopment en productontwikkeling' },
]

const values = [
  'Zinvolle bijdrage',
  'Samenwerking',
  'Invloed',
  'Creativiteit',
  'Autonomie',
]

const competencies = [
  'Analytisch',
  'Leerbereid',
  'Overtuigend',
  'Hulpvaardig',
  'Stressbestendig',
  'Sensitief',
  'Ambitieus',
  'Nauwkeurig',
]

const workExperience = [
  {
    period: '2026 - heden',
    role: 'Product Owner bij Koenders Instruments',
    context: 'Productvisie en doorontwikkeling van ViewEnVision 3 (VENV), een sensor- en dataplatform voor monitoring, analyse en visualisatie.',
    details: [
      'Verantwoordelijk voor de productvisie en doorontwikkeling van ViewEnVision 3 (VENV), een modern sensor- en dataplatform voor monitoring, analyse en visualisatie.',
      'Vertaalt gebruikerswensen en bedrijfsdoelstellingen naar een duidelijke productroadmap en concrete functionaliteit.',
      'Werkt samen met stakeholders en developers om gebruiksvriendelijke en toekomstbestendige oplossingen te realiseren.',
      'Combineert productmanagement met functioneel ontwerp en softwarearchitectuur, met focus op een schaalbaar, API-gedreven platform voor dataverwerking, visualisatie en integraties.',
      'Stuurt actief op AI-gedreven ontwikkeling en zet AI in om het ontwikkelproces en de platformfunctionaliteit te versnellen en te verbeteren.',
      'Initiatiefnemer van nieuwe concepten op het gebied van interactieve data-analyse, tijdreeksen, scenarioanalyse en geospatiale visualisaties.',
    ],
  },
  {
    period: '2023 - 2026',
    role: 'Product Owner bij Suneti',
    context: 'Productontwikkeling van bedrijfskritische SaaS-oplossingen.',
    details: [
      'Verantwoordelijk voor de productontwikkeling van bedrijfskritische SaaS-oplossingen.',
      'Vertaalde wensen en behoeften van gebruikers naar een duidelijke productvisie en concrete backlog-items.',
      'Werkte intensief samen met eindgebruikers, stakeholders en developers om functionaliteit te ontwerpen, prioriteren en realiseren.',
      'Begeleidde het ontwikkelproces, bewaakte de kwaliteit van opleveringen en droeg bij aan de continue doorontwikkeling van het platform op basis van gebruikersfeedback en bedrijfsdoelstellingen.',
    ],
  },
  {
    period: '2019 - 2025',
    role: 'ZZP designer en developer',
    context: 'Websoftware, front-end, CMS, webshops en maatwerk.',
    details: [
      'Gewerkt aan webgerelateerde projecten zoals API-koppelingen, gastenregistratieformulieren, Shopify-webshops, WordPress-websites, online rekentools en full-stack front-end development.',
      'Verantwoordelijk geweest voor technische uitvoering en samenwerking met ontwikkelaars en ontwerpers.',
      'Maatwerk WordPress-plugins geschreven en onderhouden voor klanten.',
      'Bijgedragen aan het afronden van de website van Yolanthe Cabau door cruciale bugs op te lossen richting televisielancering.',
    ],
  },
  {
    period: '2012 - 2021',
    role: 'ZZP docent, coach, coordinator en examinator',
    context: 'Onderwijs op MBO- en HBO-niveau.',
    details: [
      'Werkzaam geweest in het onderwijs, onder andere bij de Hogeschool van Amsterdam.',
      'Lesgegeven in vakken zoals Internetstandaarden, Front-end Development, Webapplicaties en Inleiding Programmeren.',
      'Vanaf het eerste jaar betrokken geweest bij de Minor Applied Game Design, inclusief projecten, Game Play en Game Theory.',
      'Meerdere jaren ingezet als coordinator binnen de minor en bij projecten, en drie jaar studenten begeleid bij hun afstudeerstage.',
      'Bij het ROC van Amsterdam eindbeoordelingen verzorgd als examinator.',
    ],
  },
  {
    period: '2012 - 2014',
    role: 'ZZP webdesigner en developer',
    context: 'Maatwerksoftware, kennisoverdracht en front-end.',
    details: [
      'Ingeschreven bij de KVK voor het ontwikkelen en produceren van maatwerksoftware, implementeren van software, niet-universitair hoger beroepsonderwijs, kennisoverdracht, front-end webdevelopment en game development.',
    ],
  },
  {
    period: '2011 - 2012',
    role: 'Gamedeveloper en didactisch kundige',
    context: 'Online cursus en lesmateriaal voor games maken.',
    details: [
      'Lesmateriaal ontwikkeld voor de online cursus Games maken voor jongeren.',
      'Voorbeeldgames ontworpen en ontwikkeld in GameMaker, lesplan gemaakt, leerteksten geschreven, screencasts opgenomen en bewerkt, toetsen gemaakt en implementatie in Moodle verzorgd.',
    ],
  },
  {
    period: '2011',
    role: 'Freelance docent MBO',
    context: 'Games maken voor MBO-leerlingen.',
    details: [
      'Lessen Games maken verzorgd aan MBO-leerlingen op het Calvijn met Junior College in Amsterdam.',
    ],
  },
  {
    period: '2010 - 2012',
    role: 'Webdeveloper',
    context: 'Webontwikkeling en technische uitvoering.',
    details: [
      'Werkervaring opgebouwd als webdeveloper naast game- en onderwijsprojecten.',
    ],
  },
  {
    period: '2008 - 2010',
    role: 'Gamedesigner bij Vanguard Games',
    context: 'Game design, level design en verhaal voor console- en retailprojecten.',
    details: [
      'Game design, level design en verhaal voor Gatling Gears.',
      'Game design en level design voor Greed Corp.',
      'Game design voor een gestaakte AAA retail console game.',
      'Verhaal en achtergrond geschreven voor intellectual property van W!Games.',
    ],
  },
  {
    period: '2006 - 2011',
    role: 'Diverse projecten als gamedesigner',
    context: 'Game design, documentatie, graphics, animatie en projectleiding.',
    details: [
      'Game design en management voor Straf Koppie, een WK 2010 webgame voor Tina van Sanoma Uitgevers.',
      'Quality assurance voor Efteling Tycoon, een spel van Atari.',
      'Game design en lead voor Qubicle Countdown, een XBox Live Arcade inzending en winnaar van de XNA competitie 2007.',
      'Game design en documentatie voor een XBox Live Arcade project voor Spartan Posse.',
      '2D graphics en animatie voor Rits je In, een integratiegame.',
    ],
  },
]

const education = [
  '2022/2023 - Scrum Master/Product Owner opleiding en voorbereiding op scrum.org PSPO I.',
  '2022/2023 - Vue.js via Vue School.',
  '2022 - Refresh cursus ES6, ES7 en ES8.',
  '2020 - Online workshops voor business.',
  '2016 - Cursus ES6 en ES7 via es6.io.',
  '2016 - Cursus didactiek.',
  '2011 - Projectmanagementcursus.',
  '2010/2011 - Cursus gamedesign lesgeven.',
  '2006 - 2009 - Animation for Games aan Qantm College, Animation Major.',
  '2003 - 2005 - Industrieel Ontwerpen aan de Technische Universiteit Delft.',
  '1997 - 2003 - VWO/atheneum met profielen Natuur & Techniek en Natuur & Gezondheid op College de Klop in Utrecht.',
]

const skillGroups = [
  {
    title: 'Web dev talen en tooling',
    items: ['HTML5', 'CSS3', 'ES6 / ES7 / ES8', 'PHP', 'Jinja / Liquid', 'Docker', 'Droplets / SSH', 'GitHub', 'Hosting / VPS', 'Vue.js', 'Python', 'webpack'],
  },
  {
    title: 'Web / CMS',
    items: ['WordPress', 'WooCommerce', 'Shopify', 'Elementor Pro', 'Wix'],
  },
  {
    title: 'Software',
    items: ['Excel', 'Photoshop', 'Illustrator', 'Affinity Designer', 'Affinity Photo', 'Captivate'],
  },
  {
    title: 'Game programming en software',
    items: ['GML', 'Kismet / Blueprints', 'C# / C++', 'GameMaker Studio', 'Unreal Engine', 'Unity', 'Autodesk Maya', '3DS Max', 'XNA', 'Adobe Flash'],
  },
]

const interests = [
  'Web design',
  'Web development',
  'Visual design',
  'Game design',
  'Game development',
  'UX',
  'Mechanics',
  'Interaction design',
  'Storytelling',
  'Character development',
  'Psychologie',
  'Communicatie',
  'Media',
  'Onderwijs',
]

const taskInterests = [
  'Overleggen',
  'Onderhandelen',
  'Overtuigen',
  'Analyseren',
  'Uitwerken',
  'Programmeren',
  'Documenteren',
  'Adviseren',
  'Begeleiden',
  'Motiveren',
  'Organiseren',
  'Plannen',
  'Strategisch denken',
]
</script>

<template>
  <main class="cv-page min-h-screen px-4 py-6 text-night md:py-10">
    <div class="mx-auto max-w-6xl">
      <nav class="cv-nav" aria-label="CV navigatie">
        <NuxtLink class="magnetic-link text-sm font-black" to="/">Terug naar homepage</NuxtLink>
        <div class="hidden gap-4 text-sm font-bold text-night/58 sm:flex">
          <a v-for="link in contact" :key="link.href" class="magnetic-link" :href="link.href">{{ link.label }}</a>
        </div>
      </nav>

      <header class="cv-hero">
        <div>
          <p class="eyebrow">Curriculum vitae</p>
          <h1>CV</h1>
          <p>Een completer naslagpunt met banen, projecten, onderwijs, opleidingen en vakgebieden. Minder pitch, meer bewijs van ervaring.</p>
        </div>
        <aside aria-label="Kerngegevens">
          <span>Jonathan Leenman</span>
          <strong>Product / UX / Software / Data</strong>
          <span v-for="fact in facts" :key="fact.label">{{ fact.label }}: {{ fact.value }}</span>
        </aside>
      </header>

      <section class="cv-grid py-10">
        <article class="cv-card cv-card--profile">
          <p class="eyebrow">Profiel</p>
          <h2>Ervaren professional met een basis in technologie, onderwijs en interactie.</h2>
          <p v-for="paragraph in profile" :key="paragraph">{{ paragraph }}</p>
        </article>

        <article class="cv-card">
          <p class="eyebrow">Kern</p>
          <h2>Waarden en competenties</h2>
          <div class="cv-compact-list">
            <div>
              <h3>Waarden</h3>
              <span v-for="item in values" :key="item">{{ item }}</span>
            </div>
            <div>
              <h3>Competenties</h3>
              <span v-for="item in competencies" :key="item">{{ item }}</span>
            </div>
          </div>
        </article>
      </section>

      <section class="cv-timeline" aria-labelledby="cv-work-title">
        <div class="cv-section-head">
          <p class="eyebrow">Tijdlijn</p>
          <h2 id="cv-work-title">Uitgelichte werkervaring</h2>
        </div>
        <article v-for="item in workExperience" :key="`${item.period}-${item.role}`" class="cv-timeline__item">
          <p>{{ item.period }}</p>
          <div>
            <h3>{{ item.role }}</h3>
            <span>{{ item.context }}</span>
          </div>
          <ul>
            <li v-for="detail in item.details" :key="detail">{{ detail }}</li>
          </ul>
        </article>
      </section>

      <section class="cv-skills" aria-labelledby="cv-skill-title">
        <div class="cv-section-head">
          <p class="eyebrow">Vaardigheden</p>
          <h2 id="cv-skill-title">Techniek, software en domeinkennis</h2>
        </div>
        <div class="cv-skill-grid">
          <article v-for="group in skillGroups" :key="group.title" class="cv-skill-group">
            <h3>{{ group.title }}</h3>
            <div>
              <span v-for="item in group.items" :key="item">{{ item }}</span>
            </div>
          </article>
        </div>
      </section>

      <section class="cv-detail-grid" aria-label="Interesses en taken">
        <article class="cv-card">
          <p class="eyebrow">Vakgebieden</p>
          <h2>Interessegebieden</h2>
          <div class="cv-tag-list">
            <span v-for="item in interests" :key="item">{{ item }}</span>
          </div>
        </article>
        <article class="cv-card">
          <p class="eyebrow">Taken</p>
          <h2>Werkvormen</h2>
          <div class="cv-tag-list">
            <span v-for="item in taskInterests" :key="item">{{ item }}</span>
          </div>
        </article>
      </section>

      <section class="cv-education" aria-labelledby="cv-education-title">
        <div class="cv-section-head">
          <p class="eyebrow">Opleiding</p>
          <h2 id="cv-education-title">Opleidingen en cursussen</h2>
        </div>
        <ol>
          <li v-for="item in education" :key="item">{{ item }}</li>
        </ol>
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
