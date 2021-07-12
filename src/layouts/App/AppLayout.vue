<template>
  <div class="grid">
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
  .grid {
    display: grid;
    grid-template-rows: 55px 1fr 30px;
    grid-template-columns: 1fr;
    grid-template-areas:
      'header'
      'content'
      'footer';
    min-height: 100vh;
    width: 100%;
    background-color: var(--dark-medium);
  }
</style>
