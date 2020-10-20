<template>
  <div class="container mx-auto my-20">
    <div v-if="error.statusCode === 404">
      <h1 class="text-4xl mb-4">Page not found</h1>
      <p class="text-red-600 font-bold">{{ error.message }}</p>
    </div>

    <div v-else>
      <h1 class="text-red-400 font-bold">An error occurred</h1>
    </div>
    <nuxt-link to="/" class="text-primary underline mt-8 block"
      >Back to Home page</nuxt-link
    >
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default',
}
</script>
