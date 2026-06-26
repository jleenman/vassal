<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const canvas = ref<HTMLCanvasElement | null>(null)
let cleanup: (() => void) | undefined

onMounted(async () => {
  if (!canvas.value) return

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const THREE = await import('three')

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
  })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100)
  camera.position.set(0, 0, 7.2)

  const root = new THREE.Group()
  scene.add(root)

  const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#dffdf7'),
    roughness: 0.12,
    metalness: 0,
    transparent: true,
    opacity: 0.55,
    transmission: 0.55,
    thickness: 0.9,
    ior: 1.45,
    clearcoat: 1,
    clearcoatRoughness: 0.08,
  })

  const prism = new THREE.Mesh(new THREE.IcosahedronGeometry(1.8, 1), glassMaterial)
  root.add(prism)

  const innerCore = new THREE.Mesh(
    new THREE.TorusKnotGeometry(0.72, 0.12, 180, 18),
    new THREE.MeshStandardMaterial({
      color: '#9dffdf',
      emissive: '#17473d',
      roughness: 0.18,
      metalness: 0.18,
      transparent: true,
      opacity: 0.78,
    }),
  )
  root.add(innerCore)

  const wire = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.86, 1),
    new THREE.MeshBasicMaterial({
      color: '#9dffdf',
      wireframe: true,
      transparent: true,
      opacity: 0.32,
    }),
  )
  root.add(wire)

  const edges = new THREE.LineSegments(
    new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(2.12, 2)),
    new THREE.LineBasicMaterial({
      color: '#f7f8f4',
      transparent: true,
      opacity: 0.16,
    }),
  )
  root.add(edges)

  const ringMaterial = new THREE.MeshBasicMaterial({
    color: '#8fa7ff',
    transparent: true,
    opacity: 0.28,
  })
  for (let index = 0; index < 3; index += 1) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(2.35 + index * 0.38, 0.006, 10, 160), ringMaterial)
    ring.rotation.x = Math.PI / 2 + index * 0.44
    ring.rotation.y = index * 0.7
    root.add(ring)
  }

  const particlesGeometry = new THREE.BufferGeometry()
  const particleCount = 150
  const positions = new Float32Array(particleCount * 3)
  for (let index = 0; index < particleCount; index += 1) {
    const radius = 2.8 + Math.random() * 2.2
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    positions[index * 3] = radius * Math.sin(phi) * Math.cos(theta)
    positions[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
    positions[index * 3 + 2] = radius * Math.cos(phi)
  }
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  const particles = new THREE.Points(
    particlesGeometry,
    new THREE.PointsMaterial({
      color: '#ffb86b',
      size: 0.026,
      transparent: true,
      opacity: 0.54,
    }),
  )
  root.add(particles)

  scene.add(new THREE.AmbientLight('#ccecff', 1.8))
  const keyLight = new THREE.DirectionalLight('#ffffff', 2.8)
  keyLight.position.set(2, 3, 5)
  scene.add(keyLight)
  const cyanLight = new THREE.PointLight('#9dffdf', 20, 15)
  cyanLight.position.set(-3, 3, 5)
  scene.add(cyanLight)
  const amberLight = new THREE.PointLight('#ffb86b', 15, 15)
  amberLight.position.set(4, -3, 4)
  scene.add(amberLight)

  const pointer = { x: 0, y: 0 }
  const setSize = () => {
    const parent = canvas.value?.parentElement
    if (!parent) return
    const width = parent.clientWidth
    const height = parent.clientHeight
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height, false)
  }
  const onPointerMove = (event: PointerEvent) => {
    pointer.x = (event.clientX / window.innerWidth - 0.5) * 2
    pointer.y = (event.clientY / window.innerHeight - 0.5) * 2
  }

  let frame = 0
  let animationId = 0
  const animate = () => {
    frame += reducedMotion ? 0 : 0.008
    const targetX = pointer.y * 0.16
    const targetY = pointer.x * 0.18
    root.rotation.x += (targetX - root.rotation.x) * 0.045
    root.rotation.y += (targetY + frame - root.rotation.y) * 0.035
    prism.rotation.z = Math.sin(frame * 0.7) * 0.12
    innerCore.rotation.x = frame * 1.4
    innerCore.rotation.y = -frame * 0.9
    edges.rotation.z = -frame * 0.22
    particles.rotation.y = -frame * 0.38
    renderer.render(scene, camera)
    animationId = window.requestAnimationFrame(animate)
  }

  setSize()
  animate()
  window.addEventListener('resize', setSize)
  window.addEventListener('pointermove', onPointerMove)

  cleanup = () => {
    window.cancelAnimationFrame(animationId)
    window.removeEventListener('resize', setSize)
    window.removeEventListener('pointermove', onPointerMove)
    renderer.dispose()
    particlesGeometry.dispose()
    glassMaterial.dispose()
    ringMaterial.dispose()
  }
})

onBeforeUnmount(() => cleanup?.())
</script>

<template>
  <canvas ref="canvas" class="h-full w-full" aria-hidden="true" />
</template>
