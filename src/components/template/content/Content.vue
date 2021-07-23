<template>
  <main fluid class="content">
    <transition name="slide" mode="out-in">
      <router-view />
    </transition>
  </main>
</template>

<script>
export default {
  name: 'Content',
}
</script>

<style>
  .content {
    grid-area: content;
    margin: 30px 0;
    max-width: 100vw;
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: transform 0.5s, opacity 0.3s ease;
  }

  .slide-enter {
    transform: translateX(-10%);
    opacity: 0;
  }

  .slide-leave-to {
    transform: translateX(10%);
    opacity: 0;
  }

  .slide-leave,
  .slide-enter-to {
    transform : translateX(0);
    opacity: 1;
  }
</style>
