<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'

let observer: IntersectionObserver | undefined

onMounted(async () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal').forEach((element) => {
      element.classList.remove('reveal')
    })
    return
  }

  const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
  elements.forEach((element) => {
    const rect = element.getBoundingClientRect()
    if (rect.top < window.innerHeight * 0.92) {
      element.style.opacity = '1'
      element.style.transform = 'translateY(0)'
      return
    }

    element.style.opacity = '0'
    element.style.transform = 'translateY(22px)'
    element.style.transition = 'opacity 760ms ease, transform 760ms cubic-bezier(0.22, 1, 0.36, 1)'
  })

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      const element = entry.target as HTMLElement
      element.style.opacity = '1'
      element.style.transform = 'translateY(0)'
      observer?.unobserve(element)
    })
  }, {
    rootMargin: '0px 0px -12% 0px',
    threshold: 0.05,
  })

  elements.forEach((element) => {
    if (element.style.opacity === '0') {
      observer?.observe(element)
    }
  })
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <span aria-hidden="true" />
</template>
