<template>
  <div v-if="category" class="max-w-screen my-20 container mx-auto">
    <div v-if="error">{{ error }}</div>
    <template v-else>
      <nuxt-link :to="`/categories${category.path}`">
        <h1 class="text-4xl font-semibold text-gray-800 md:text-5xl">
          {{ category.name }}
        </h1>
      </nuxt-link>
      <ProductSlider :products="products" />
    </template>
  </div>
</template>

<script>
import strShorten from 'str_shorten'
import { getProductsByCategory } from '../plugins/bigCommerceApi'

export default {
  props: {
    category: Object,
    error: Error,
  },
  data() {
    return { products: [] }
  },
  async mounted() {
    const res = await this.getProductsByCategory(this.category.path)
    if (res) {
      this.products = res.site.route.node.products.edges.map((e) => e.node)
    }
  },
  methods: {
    strShorten,
    getProductsByCategory,
  },
}
</script>
