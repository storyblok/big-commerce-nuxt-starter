import Vue from 'vue'
import Page from '~/components/Page.vue'
import Teaser from '~/components/Teaser.vue'
import Products from '~/components/Products.vue'
import ProductGrid from '~/components/ProductGrid.vue'
import Feature from '~/components/Feature.vue'
import CategoryProducts from '~/components/CategoryProducts.vue'

Vue.component('blok-page', Page)
Vue.component('blok-hero', Teaser)
Vue.component('blok-product-feature', Feature)
Vue.component('blok-product-slider', Products)
Vue.component('blok-product-grid', ProductGrid)
Vue.component('blok-category-products', CategoryProducts)

export const availableComponents = [
  'blok-page',
  'blok-hero',
  'blok-product-feature',
  'blok-product-slider',
  'blok-product-grid',
  'blok-category-products',
]
