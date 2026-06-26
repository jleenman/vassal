<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'

let context: { revert: () => void } | undefined

onMounted(async () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal').forEach((element) => {
      element.classList.remove('reveal')
    })
    return
  }

  const gsapModule = await import('gsap')
  const scrollTriggerModule = await import('gsap/ScrollTrigger')
  const gsap = gsapModule.gsap
  const ScrollTrigger = scrollTriggerModule.ScrollTrigger
  gsap.registerPlugin(ScrollTrigger)

  context = gsap.context(() => {
    gsap.utils.toArray<HTMLElement>('.reveal').forEach((element) => {
      gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 84%',
          once: true,
        },
      })
    })
  })
})

onBeforeUnmount(() => context?.revert())
</script>

<template>
  <span aria-hidden="true" />
</template>
