<template>
  <footer class="footer">
    <span>Desenvolvido por <strong>Zeon Solutions</strong> 2021</span>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
  .footer {
    grid-area: footer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--light-blue);
    font-family: 'Raleway', sans-serif;
  }

  .footer span {
    color: var(--lighter);
  }
</style>
