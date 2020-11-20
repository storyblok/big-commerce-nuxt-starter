<template>
  <div v-editable="blok" class="teaser flex bg-white" style="height: 600px">
    <div
      class="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2"
    >
      <div>
        <h2 class="text-3xl font-semibold text-gray-800 md:text-4xl">
          {{ blok.headline }}
        </h2>
        <div
          class="mt-2 text-sm text-gray-500 md:text-base"
          v-html="richtext"
        />
        <div class="flex justify-center lg:justify-start mt-6">
          <nuxt-link
            class="px-4 py-3 bg-primary text-gray-200 text-xs font-semibold rounded hover:bg-gray-800"
            :to="blok.link.cached_url"
            >Read more
          </nuxt-link>
        </div>
      </div>
    </div>
    <div
      class="hidden lg:block lg:w-1/2"
      style="clip-path: polygon(10% 0, 100% 0%, 100% 100%, 0 100%)"
    >
      <div
        class="h-full object-cover relative"
        :style="`
          background-image: url(${imgUrl});
        `"
      >
        <div class="h-full bg-black opacity-25"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok'],
  computed: {
    imgUrl() {
      const imageUrl = this.blok.image
        ? this.blok.image.filename
            .replace('https://a', 'https://img2')
            .replace('k.com/', 'k.com/800x800/')
        : ''
      return imageUrl
    },
    richtext() {
      return this.$storyapi.richTextResolver.render(this.blok.description)
    },
  },
}
</script>
