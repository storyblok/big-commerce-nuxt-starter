import Vue from 'vue'
import AsyncComputed from 'vue-async-computed'
import Page from '~/components/Page.vue'
import Teaser from '~/components/Teaser.vue'
import CategoryBar from '~/components/CategoryBar.vue'
import Products from '~/components/Products.vue'
import Feature from '~/components/Feature.vue'
import CategoryProducts from '~/components/CategoryProducts.vue'

Vue.use(AsyncComputed)

Vue.component('blok-page', Page)
Vue.component('blok-teaser', Teaser)
Vue.component('blok-categories-bar', CategoryBar)
Vue.component('blok-product-feature', Feature)
Vue.component('blok-product-slider', Products)
Vue.component('blok-category-products', CategoryProducts)

export const availableComponents = [
  'blok-page',
  'blok-teaser',
  'blok-categories-bar',
  'blok-product-feature',
  'blok-product-slider',
  'blok-category-products',
]
