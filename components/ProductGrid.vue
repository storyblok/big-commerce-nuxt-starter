<template>
  <div
    v-editable="blok"
    class="flex flex-row flex-wrap mx-auto container mt-16 lg:px-0 px-8"
  >
    <aside class="w-1/5">
      <h2 class="text-xl font-bold mb-4">All Categories</h2>
      <ul>
        <li
          v-for="cat in fullCategories"
          :key="cat.entityId"
          class="hover:opacity-50 transition-opacity duration-200"
        >
          <nuxt-link :to="`/categories${cat.path}`">
            {{ cat.name }}
          </nuxt-link>
        </li>
      </ul>
    </aside>
    <div class="flex flex-row flex-wrap mx-auto w-4/5">
      <nuxt-link
        v-for="product in fullProducts"
        :key="product.entityId"
        class="flex w-full md:w-1/2 lg:w-1/3"
        :to="`/product${product.path}`"
      >
        <div
          class="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs hover:opacity-50"
        >
          <div class="flex flex-col justify-center px-6 pb-6">
            <div class="prod-img">
              <img
                v-if="product.defaultImage"
                :src="product.defaultImage.img320px"
                class="w-full object-cover object-center"
              />
            </div>
            <div class="prod-title">
              <p class="text-xs mt-4 mb-2 uppercase text-gray-900">
                {{ product.name }}
              </p>
            </div>
            <div class="prod-info grid gap-10">
              <div
                class="flex flex-col md:flex-row justify-between items-center text-gray-900"
              >
                <p v-if="product.prices" class="font-bold text-xl">
                  {{
                    `${product.prices.price.value} ${product.prices.price.currencyCode}`
                  }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import {
  categoriesByIds,
  getProductsById,
} from '../plugins/graphql-bigcommerce'

export default {
  props: {
    blok: Object,
    products: Object,
    categories: Object,
    error: Object,
  },
  data() {
    return {
      fullCategories: [],
      fullProducts: [],
    }
  },
  async mounted() {
    const categoryIds = this.blok.categories.items.map((i) => i.id)
    const productIds = this.blok.products.items.map((i) => i.id)
    const productResponse = await getProductsById(productIds)
    const categoryResponse = await categoriesByIds(categoryIds)
    this.fullProducts = productResponse.site.products.edges
      .map((e) => e.node)
      .filter((e) => productIds.includes(e.entityId))
      .sort((a, b) => {
        return productIds.indexOf(a.entityId) - productIds.indexOf(b.entityId)
      })
    this.fullCategories = categoryResponse.sort((a, b) => {
      return categoryIds.indexOf(a.entityId) - categoryIds.indexOf(b.entityId)
    })
  },
}
</script>
