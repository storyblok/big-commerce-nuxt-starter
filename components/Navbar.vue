<template>
  <nav
    v-if="story.content"
    v-editable="story.content"
    class="bg-white shadow-lg w-full fixed z-20 top-0 left-0"
  >
    <div
      class="md:flex container w-full mx-auto items-center justify-between py-2"
    >
      <div class="flex justify-between items-center">
        <div class="text-2xl font-bold text-gray-800 md:text-3xl">
          <nuxt-link to="/"> {{ story.content.title }} </nuxt-link>
        </div>
        <div class="md:hidden">
          <button
            type="button"
            class="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
          >
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                class="hidden"
                d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"
              />
              <path
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        v-if="story.content.items"
        class="flex flex-col md:flex-row hidden md:block -mx-2"
      >
        <nuxt-link
          v-for="item in story.content.items"
          :key="item.name"
          :to="item.url.cached_url"
          class="text-gray-800 rounded hover:bg-primary hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
          >{{ item.name }}</nuxt-link
        >
      </div>
    </div>
  </nav>
  <nav v-else class="bg-white shadow-lg w-full fixed z-20 top-0 left-0">
    <!-- No Navigation Setting found in Storyblok -->
    <div
      class="md:flex container w-full mx-auto items-center justify-between py-2"
    >
      <div class="text-2xl font-bold text-gray-800 md:text-3xl">
        <nuxt-link to="/"> My Brand </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      story: {},
    }
  },
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories/navigation', {
        version: 'draft',
      })
      .then((res) => {
        return res.data
      })
      .catch((res) => {
        if (!res.response) {
          console.error(res)
          context.error({
            statusCode: 404,
            message: 'Failed to receive content form api',
          })
        } else {
          console.error(res.response.data)
          context.error({
            statusCode: res.response.status,
            message: res.response.data,
          })
        }
      })
  },
}
</script>
