<template>
  <div v-editable="blok" class="max-w-screen my-20 container mx-auto">
    <div v-if="error">{{ error }}</div>
    <template v-else>
      <h1
        class="text-lg text-center uppercase tracking-wider font-semibold text-gray-800 md:text-xl"
      >
        {{ blok.headline }}
      </h1>
      <ProductSlider :products="fullProducts" />
    </template>
  </div>
</template>

<script>
import strShorten from 'str_shorten'

import { getProductsById } from '../plugins/graphql-bigcommerce'
import ProductSlider from './ProductSlider'

export default {
  components: { ProductSlider },
  props: {
    error: Object,
    blok: Object,
  },
  data() {
    return {
      fullProducts: [],
    }
  },
  async mounted() {
    const ids =
      this.blok.products && this.blok.products.items.length
        ? this.blok.products.items.map((p) => p.id)
        : []
    const res = await getProductsById({ ids })
    if (res) {
      this.fullProducts = res.site.products.edges.map((e) => e.node)
    }
  },
  methods: {
    strShorten,
  },
}
</script>
