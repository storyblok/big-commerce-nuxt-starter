import Vue from 'vue'
import Page from '~/components/Page.vue'
import Teaser from '~/components/Teaser.vue'
import Buttons from '~/components/Buttons.vue'
import Products from '~/components/Products.vue'
import Feature from '~/components/Feature.vue'
import CategoryProducts from '~/components/CategoryProducts.vue'

Vue.component('blok-page', Page)
Vue.component('blok-teaser', Teaser)
Vue.component('blok-categories-bar', Buttons)
Vue.component('blok-feature', Feature)
Vue.component('blok-products', Products)
Vue.component('blok-category-products', CategoryProducts)
