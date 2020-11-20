<template>
  <section
    v-if="product"
    v-editable="blok"
    class="text-gray-700 body-font overflow-hidden bg-white"
  >
    <div class="container py-24 mx-auto">
      <h1
        class="text-lg text-center uppercase tracking-wider font-semibold text-gray-800 md:text-xl"
      >
        {{ blok.headline }}
      </h1>
      <div class="flex flex-wrap items-center justify-start mt-16">
        <img
          :alt="product.defaultImage.altText"
          class="lg:w-1/3 w-full max-w-screen-sm object-cover object-center block rounded border border-gray-200"
          :src="product.defaultImage.img1280px"
        />
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 lg:mt-0">
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
            {{ product.name }}
          </h1>
          <p class="leading-relaxed">
            {{ strippedContent }}
          </p>
          <div class="w-full mt-8">
            <a
              :href="product.addToCartUrl"
              class="text-white bg-primary border-0 py-2 px-6 uppercase focus:outline-none hover:bg-gray-900 rounded"
              >Buy it now</a
            >
            <nuxt-link
              :key="product.entityId"
              class="text-white bg-blue-900 border-0 py-2 px-6 uppercase focus:outline-none hover:bg-gray-900 rounded"
              :to="`/product${product.path}`"
              >Learn More</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import strShorten from 'str_shorten'
import { getProductById } from '../plugins/graphql-bigcommerce'

export default {
  props: {
    blok: Object,
  },
  data() {
    return {
      product: null,
      error: null,
    }
  },
  computed: {
    strippedContent() {
      const regex = /(<([^>]+)>)/gi
      return strShorten(this.product.description.replace(regex, ''), 400)
    },
  },
  async mounted() {
    try {
      const res = await getProductById(this.blok.product.items[0].id)
      if (res) {
        this.product = res.site.product
      }
    } catch (error) {
      this.error = error
    }
  },
  methods: {
    strShorten,
  },
}
</script>
