<template>
  <VueSlickCarousel
    v-if="products.length"
    v-bind="settings"
    :arrows="true"
    :dots="true"
  >
    <nuxt-link
      v-for="product in products"
      :key="product.entityId"
      :to="`/product${product.path}`"
    >
      <div
        class="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs hover:opacity-50"
      >
        <div class="card flex flex-col justify-center p-8">
          <div class="prod-img">
            <img
              :src="product.defaultImage.img640px"
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
              <p class="font-bold text-xl">
                {{
                  `${product.prices.price.value} ${product.prices.price.currencyCode}`
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </nuxt-link>
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: { VueSlickCarousel },
  props: {
    products: Array,
    error: Object,
  },
  data() {
    return {
      settings: {
        dots: true,
        arrows: true,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        touchThreshold: 5,
      },
    }
  },
}
</script>

<style>
.slick-next:before {
  width: 20px;
  height: 20px;
  content: '';
  background-size: contain;
  display: block;
  background-image: url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdHkvMS4wLyIgeG1sbnM6aT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiB4bWxuczpncmFwaD0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyIgaTp2aWV3T3JpZ2luPSIzIDE2IiBpOnJ1bGVyT3JpZ2luPSIwIDAiIGk6cGFnZUJvdW5kcz0iMCAxNiAxNiAwIiB2aWV3Qm94PSIwIDAgMTAuNSAxNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAuNSAxNjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjBweCIgeT0iMHB4IiBvdmVyZmxvdz0idmlzaWJsZSI+PG1ldGFkYXRhPjx2YXJpYWJsZVNldHMgeG1sbnM9Imh0dHA6Ly9ucy5hZG9iZS5jb20vVmFyaWFibGVzLzEuMC8iPjx2YXJpYWJsZVNldCB2YXJTZXROYW1lPSJiaW5kaW5nMSIgbG9ja2VkPSJub25lIj48dmFyaWFibGVzPjwvdmFyaWFibGVzPjx2OnNhbXBsZURhdGFTZXRzIHhtbG5zPSJodHRwOi8vbnMuYWRvYmUuY29tL0dlbmVyaWNDdXN0b21OYW1lc3BhY2UvMS4wLyIgeG1sbnM6dj0iaHR0cDovL25zLmFkb2JlLmNvbS9WYXJpYWJsZXMvMS4wLyI+PC92OnNhbXBsZURhdGFTZXRzPjwvdmFyaWFibGVTZXQ+PC92YXJpYWJsZVNldHM+PHNmdyB4bWxucz0iaHR0cDovL25zLmFkb2JlLmNvbS9TYXZlRm9yV2ViLzEuMC8iPjxzbGljZXM+PC9zbGljZXM+PHNsaWNlU291cmNlQm91bmRzIHk9IjAiIHg9IjMiIHdpZHRoPSIxMC41IiBoZWlnaHQ9IjE2IiBib3R0b21MZWZ0T3JpZ2luPSJ0cnVlIj48L3NsaWNlU291cmNlQm91bmRzPjwvc2Z3Pjw/eHBhY2tldCBiZWdpbj0nJiM2NTI3OTsnIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz48eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgdG9vbGtpdCAzLjAtMjksIGZyYW1ld29yayAxLjYiPjwveDp4bXBtZXRhPjw/eHBhY2tldCBlbmQ9J3cnPz48L21ldGFkYXRhPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3QgcmVxdWlyZWRFeHRlbnNpb25zPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlSWxsdXN0cmF0b3IvMTAuMC8iIHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjwvZm9yZWlnbk9iamVjdD48ZyBpOmV4dHJhbmVvdXM9InNlbGYiPjxnIGk6bGF5ZXI9InllcyIgaTpkaW1tZWRQZXJjZW50PSI1MCIgaTpyZ2JUcmlvPSIjNEYwMDgwMDBGRkZGIj48cG9seWdvbiBpOmtub2Nrb3V0PSJPZmYiIHBvaW50cz0iMi41LDAgMCwyLjUgNS41LDggMCwxMy41IDIuNSwxNiAxMC41LDggIj48L3BvbHlnb24+PC9nPjwvZz48L3N3aXRjaD48L3N2Zz4=');
}

.slick-prev:before {
  background-size: contain;
  display: block;
  width: 20px;
  height: 20px;
  content: '';
  transform: scaleX(-1);
  background-image: url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdHkvMS4wLyIgeG1sbnM6aT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiB4bWxuczpncmFwaD0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyIgaTp2aWV3T3JpZ2luPSIzIDE2IiBpOnJ1bGVyT3JpZ2luPSIwIDAiIGk6cGFnZUJvdW5kcz0iMCAxNiAxNiAwIiB2aWV3Qm94PSIwIDAgMTAuNSAxNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAuNSAxNjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjBweCIgeT0iMHB4IiBvdmVyZmxvdz0idmlzaWJsZSI+PG1ldGFkYXRhPjx2YXJpYWJsZVNldHMgeG1sbnM9Imh0dHA6Ly9ucy5hZG9iZS5jb20vVmFyaWFibGVzLzEuMC8iPjx2YXJpYWJsZVNldCB2YXJTZXROYW1lPSJiaW5kaW5nMSIgbG9ja2VkPSJub25lIj48dmFyaWFibGVzPjwvdmFyaWFibGVzPjx2OnNhbXBsZURhdGFTZXRzIHhtbG5zPSJodHRwOi8vbnMuYWRvYmUuY29tL0dlbmVyaWNDdXN0b21OYW1lc3BhY2UvMS4wLyIgeG1sbnM6dj0iaHR0cDovL25zLmFkb2JlLmNvbS9WYXJpYWJsZXMvMS4wLyI+PC92OnNhbXBsZURhdGFTZXRzPjwvdmFyaWFibGVTZXQ+PC92YXJpYWJsZVNldHM+PHNmdyB4bWxucz0iaHR0cDovL25zLmFkb2JlLmNvbS9TYXZlRm9yV2ViLzEuMC8iPjxzbGljZXM+PC9zbGljZXM+PHNsaWNlU291cmNlQm91bmRzIHk9IjAiIHg9IjMiIHdpZHRoPSIxMC41IiBoZWlnaHQ9IjE2IiBib3R0b21MZWZ0T3JpZ2luPSJ0cnVlIj48L3NsaWNlU291cmNlQm91bmRzPjwvc2Z3Pjw/eHBhY2tldCBiZWdpbj0nJiM2NTI3OTsnIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz48eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgdG9vbGtpdCAzLjAtMjksIGZyYW1ld29yayAxLjYiPjwveDp4bXBtZXRhPjw/eHBhY2tldCBlbmQ9J3cnPz48L21ldGFkYXRhPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3QgcmVxdWlyZWRFeHRlbnNpb25zPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlSWxsdXN0cmF0b3IvMTAuMC8iIHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjwvZm9yZWlnbk9iamVjdD48ZyBpOmV4dHJhbmVvdXM9InNlbGYiPjxnIGk6bGF5ZXI9InllcyIgaTpkaW1tZWRQZXJjZW50PSI1MCIgaTpyZ2JUcmlvPSIjNEYwMDgwMDBGRkZGIj48cG9seWdvbiBpOmtub2Nrb3V0PSJPZmYiIHBvaW50cz0iMi41LDAgMCwyLjUgNS41LDggMCwxMy41IDIuNSwxNiAxMC41LDggIj48L3BvbHlnb24+PC9nPjwvZz48L3N3aXRjaD48L3N2Zz4=');
}
</style>
