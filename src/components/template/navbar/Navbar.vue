<template>
  <header class="header">
    <b-navbar toggleable="sm" type="dark" class="nav">
      <router-link :to="{ name: 'Dashboard' }">
        <b-navbar-brand>
          <img src="../../../assets/images/logo.png" alt="abda_logo">
        </b-navbar-brand>
      </router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="font-menu">
          <router-link active-class="active" class="nav-link" :to="{ name: 'Infos' }">INFORMAÇÕES</router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
  .header {
    grid-area: header;
    display: flex;
    background: var(--light);
  }

  .nav {
    width: 100%;
    background: var(--light-blue);
  }

  img {
    height: 40px;
  }

  .font-menu {
    font-family: 'Raleway', sans-serif;
  }
</style>
