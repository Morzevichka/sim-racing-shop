<script setup>
useHead({
  htmlAttrs: {
    lang: 'ru'
  },
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { charset: 'utf-8' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})

useSeoMeta({
  title: 'Sim Racing Shop',
  ogTitle: 'Sim Racing Shop',
  description: 'Site for buying sim racing equipment.',
  ogDescription: 'Site for buying sim racing equipment.',
  ogType: 'website',
  ogLocale: 'ru_RU',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <NuxtLayout />
</template>
