<template>
  <header class="header">
    <b-navbar toggleable="sm" type="dark" variant="info" class="nav">
    <b-navbar-brand href="#">ABDA</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Links úteis</b-nav-item>
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
    background: var(--dark-low);
  }

  .nav {
    width: 100vw;
  }
</style>
