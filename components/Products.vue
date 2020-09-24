<template>
  <div v-editable="blok" class="max-w-screen my-20 container mx-auto">
    <div v-if="error">{{ error }}</div>
    <template v-else>
      <h1
        class="text-lg text-center uppercase tracking-wider font-semibold text-gray-800 md:text-xl"
      >
        {{ blok.heading }}
      </h1>
      <ProductSlider :products="fullProducts" />
    </template>
  </div>
</template>

<script>
import strShorten from 'str_shorten'

import { getProducts } from '../plugins/bigCommerceApi'
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
    const ids = this.blok.items.items.map((p) => p.entityId)
    const res = await this.getProducts(ids)
    if (res) {
      this.fullProducts = res.site.products.edges.map((e) => e.node)
    }
  },
  methods: {
    strShorten,
    getProducts,
  },
}
</script>
