<template>
  <div class="flex justify-center bg-white">
    <div class="flex flex-col min-h-screen w-full">
      <NavBar />
      <nuxt class="flex-grow pt-8" />
      <Footer />
    </div>
  </div>
</template>

<script>
import NavBar from './../components/Navbar'
import Footer from './../components/Footer'

export default {
  components: {
    Footer,
    NavBar,
  },
}
</script>
