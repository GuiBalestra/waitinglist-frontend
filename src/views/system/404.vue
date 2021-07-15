<template>
  <b-container>
    <PageTitle :title="title" />

    <div class="d-flex justify-content-center">
      <div class="monitor-external">
        <div class="monitor-internal">404</div>
      </div>
    </div>
  </b-container>
</template>

<script>
import PageTitle from '@/components/pageTitle/PageTitle.vue'

export default {
  components: {
    [PageTitle.name]: PageTitle
  },

  data: () => ({
    title: 'Página não encontrada!'
  })
}
</script>

<style>
  @media (min-width:  576px) {
    .monitor-external {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 400px;
      width: 500px;
      border-radius: 10px;
      background: var(--dark-low);
      border: 5px solid var(--darker);
    }

    .monitor-internal {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 350px;
      width: 450px;
      border-radius: 5px;
      background: var(--light-low);
      border: 5px solid var(--darker);
      font-size: 80px;
    }
  }

  @media (max-width: 575px){
    .monitor-external {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 300px;
      width: 400px;
      border-radius: 10px;
      background: var(--dark-low);
      border: 5px solid var(--darker);
    }

    .monitor-internal {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 250px;
      width: 350px;
      border-radius: 5px;
      background: var(--light-low);
      border: 5px solid var(--darker);
      font-size: 80px;
    }
  }

   @media (max-width: 500px){
    .monitor-external {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 250px;
      width: 350px;
      border-radius: 10px;
      background: var(--dark-low);
      border: 5px solid var(--darker);
    }

    .monitor-internal {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 200px;
      width: 300px;
      border-radius: 5px;
      background: var(--light-low);
      border: 5px solid var(--darker);
      font-size: 80px;
    }
  }

   @media (max-width: 380px){
    .monitor-external {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 200px;
      width: 300px;
      border-radius: 10px;
      background: var(--dark-low);
      border: 5px solid var(--darker);
    }

    .monitor-internal {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 150px;
      width: 250px;
      border-radius: 5px;
      background: var(--light-low);
      border: 5px solid var(--darker);
      font-size: 80px;
    }
  }
</style>
