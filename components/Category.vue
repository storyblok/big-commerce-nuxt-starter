<template>
  <div v-if="category" class="max-w-screen my-20 container mx-auto">
    <div v-if="error">{{ error }}</div>
    <template v-else>
      <h1 class="text-4xl font-semibold text-gray-800 md:text-5xl">
        {{ category.name }}
      </h1>
      <ProductSlider :products="products" />
    </template>
  </div>
</template>

<script>
import strShorten from 'str_shorten'
import {
  getProductsByPath,
  getProductsByCategory,
} from '../plugins/graphql-bigcommerce'

export default {
  props: {
    category: Object,
    error: Error,
  },
  data() {
    return { products: [] }
  },
  async mounted() {
    const activeFunction = this.category.path
      ? getProductsByPath
      : getProductsByCategory
    const activeParam = this.category.path
      ? this.category.path
      : this.category.id
    const res = await activeFunction(activeParam)
    if (res) {
      this.products = res.site.route.node.products.edges.map((e) => e.node)
    }
  },
  methods: {
    strShorten,
  },
}
</script>
