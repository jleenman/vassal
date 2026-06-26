<template>
  <section class="relative min-h-[92vh] overflow-hidden px-4 pb-20 pt-28 text-ink md:pt-36">
    <div class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,rgba(157,255,223,0.12),transparent_34rem)]" />
    <div class="section-shell grid min-h-[72vh] items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
      <div class="relative z-10">
        <p class="eyebrow reveal">Jonathan Leenman</p>
        <h1 class="reveal mt-5 max-w-4xl font-display text-6xl font-extrabold leading-[0.9] tracking-normal text-balance sm:text-7xl lg:text-8xl">
          The difference maker.
        </h1>
        <p class="reveal mt-7 max-w-2xl text-xl leading-8 text-ink/76 text-balance">
          Ik ontwerp hoe complexe producten eenvoudiger kunnen worden: product, UX, software, data en nieuwe manieren van bouwen.
        </p>
        <div class="reveal mt-9 flex flex-col gap-3 sm:flex-row">
          <a class="glass rounded-full px-6 py-3 text-sm font-bold text-ink transition hover:border-signal/70" href="#thinking">
            Zie hoe ik denk
          </a>
          <a class="rounded-full border border-white/12 px-6 py-3 text-sm font-bold text-ink/80 transition hover:border-white/32 hover:text-ink" href="#contact">
            Start een gesprek
          </a>
        </div>
      </div>
      <div class="reveal relative min-h-[420px] lg:min-h-[610px]">
        <div class="absolute inset-0 rounded-[44px] bg-gradient-to-br from-white/10 via-white/0 to-signal/10 blur-3xl" />
        <div class="glass relative h-[420px] overflow-hidden rounded-[38px] lg:h-[610px]">
          <div class="hero-lens hero-lens-a" aria-hidden="true" />
          <div class="hero-lens hero-lens-b" aria-hidden="true" />
          <div class="hero-grid" aria-hidden="true" />
          <ClientOnly>
            <HeroDifferenceField />
            <template #fallback>
              <div class="grid h-full place-items-center">
                <div class="h-56 w-56 rounded-[40px] border border-signal/30 bg-white/10 shadow-glow" />
              </div>
            </template>
          </ClientOnly>
          <div class="pointer-events-none absolute inset-x-8 bottom-8 rounded-3xl border border-white/10 bg-night/28 p-5 backdrop-blur-xl">
            <p class="text-xs font-bold uppercase tracking-[0.18em] text-signal/80">controlled distortion field</p>
            <p class="mt-2 text-sm leading-6 text-ink/70">Een visueel systeem voor anders kijken: niet harder duwen, maar het probleem van vorm laten veranderen.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
