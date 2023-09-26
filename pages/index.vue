<script setup lang="ts">
const story = await useAsyncStoryblok(
  'home',
  { version: 'draft' },
)
/* const { products, fetchProducts } = useStore()

await fetchProducts() */
</script>

<template>
  <StoryblokComponent
    v-if="story"
    :blok="story.content"
  />
</template>