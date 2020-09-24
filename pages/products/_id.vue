<template>
  <section
    v-if="product"
    class="text-gray-700 body-font overflow-hidden bg-white"
  >
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <img
          :alt="product.defaultImage.altText"
          class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
          :src="product.defaultImage.img1280px"
        />
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 class="text-sm title-font text-gray-500 tracking-widest">
            <span
              v-for="category in product.categories.edges"
              :key="category.node.name"
              >{{ category.node.name }} -</span
            >
          </h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
            {{ product.name }}
          </h1>
          <p class="leading-relaxed" v-html="product.description"></p>
          <span class="block mt-4 pb-5 border-b-2 border-gray-200 mb-5"></span>
          <div class="flex">
            <span class="title-font font-medium text-2xl text-gray-900">
              {{
                `${product.prices.price.value} ${product.prices.price.currencyCode}`
              }}
            </span>
            <a
              :href="product.addToCartUrl"
              class="flex ml-auto text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded"
              >Go to shop</a
            >
            <a
              :href="product.addToWishlistUrl"
              class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
            >
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getProductInfo } from '../../plugins/bigCommerceApi'

export default {
  data() {
    return {
      product: null,
      error: null,
    }
  },
  async mounted() {
    try {
      const res = await this.getProductInfo(this.$route.params.id)
      if (res) {
        this.product = res.site.product
        console.log(this.product)
      }
    } catch (error) {
      this.error = error
    }
  },
  methods: {
    getProductInfo,
  },
}
</script>
