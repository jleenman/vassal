<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const sections = [
  { id: 'home', label: 'Profiel' },
  { id: 'why', label: 'Waarom' },
  { id: 'thinking', label: 'Denken' },
  { id: 'field', label: 'Werkveld' },
  { id: 'trajectory', label: 'Route' },
  { id: 'impact', label: 'Impact' },
  { id: 'personal', label: 'Persoonlijk' },
  { id: 'contact', label: 'Contact' },
]

const progress = ref(0)
const activeSection = ref('home')

const updateSpine = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight
  progress.value = scrollable <= 0 ? 0 : Math.min(1, Math.max(0, window.scrollY / scrollable))

  const anchor = window.innerHeight * 0.34
  const current = sections
    .map((section) => {
      const element = document.getElementById(section.id)
      if (!element) return { id: section.id, distance: Number.POSITIVE_INFINITY }
      return { id: section.id, distance: Math.abs(element.getBoundingClientRect().top - anchor) }
    })
    .sort((a, b) => a.distance - b.distance)[0]

  if (current) {
    activeSection.value = current.id
  }
}

onMounted(() => {
  updateSpine()
  window.addEventListener('scroll', updateSpine, { passive: true })
  window.addEventListener('resize', updateSpine)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateSpine)
  window.removeEventListener('resize', updateSpine)
})
</script>

<template>
  <aside class="journey-spine" aria-label="Voortgang door de pagina">
    <div class="journey-spine__track">
      <span class="journey-spine__fill" :style="{ transform: `scaleY(${progress})` }" />
    </div>
    <a
      v-for="(section, index) in sections"
      :key="section.id"
      class="journey-spine__node"
      :class="{ 'journey-spine__node--active': activeSection === section.id }"
      :href="`#${section.id}`"
      :aria-current="activeSection === section.id ? 'location' : undefined"
      :style="{ '--node': index / (sections.length - 1) }"
    >
      <span>{{ section.label }}</span>
    </a>
  </aside>
</template>
