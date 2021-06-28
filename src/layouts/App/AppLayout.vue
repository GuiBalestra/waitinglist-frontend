<template>
  <div class="view">
    <Navbar />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/template/navbar/Navbar.vue'
import Content from '@/components/template/content/Content.vue'
import Footer from '@/components/template/footer/Footer.vue'

export default {
  name: 'AppLayout',

  components: {
    [Navbar.name]: Navbar,
    [Content.name]: Content,
    [Footer.name]: Footer
  }
}
</script>

<style>
  .view {
    display: grid;
    grid-template-rows: 50px 1fr 30px;
    grid-auto-columns: 1fr;
    grid-template-areas: 
      'header'
      'content'
      'footer';
    min-height: 100vh;
    background-color: var(--dark-medium);
  }
</style>
