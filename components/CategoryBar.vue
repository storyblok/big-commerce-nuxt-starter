<template>
  <div v-editable="blok">
    <div v-if="error">
      {{ error }}
    </div>
    <div v-else class="container mx-auto mt-8 flex flex-col items-center">
      <h1
        class="text-lg uppercase tracking-wider font-semibold text-gray-800 md:text-xl"
      >
        {{ blok.headline }}
      </h1>
      <div
        class="mt-3 py-3 -mx-3 overflow-y-auto whitespace-no-wrap scroll-hidden"
      >
        <nuxt-link
          v-for="category in apiCategories"
          :key="category.id"
          :to="`/categories${category.path}`"
          class="text-sm text-white leading-5 no-underline py-3 px-4 font-medium mr-3 bg-primary hover:bg-gray-900"
        >
          {{ category.name }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { categoriesByIds } from '../plugins/graphql-bigcommerce'

export default {
  props: ['blok', 'error'],
  asyncComputed: {
    apiCategories: {
      get() {
        const ids = this.blok.categories.items.map((i) => i.id)
        return categoriesByIds(ids)
      },
      default: [],
    },
  },
}
</script>
