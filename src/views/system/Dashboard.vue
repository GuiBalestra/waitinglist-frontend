<template>
  <b-container class="centralize">
    <p class="presentation">A Associação Bauruense de Desportes Aquáticos (ABDA) é uma associação de direito privado, sem fins econômicos, de caráter organizacional, filantrópico, assistencial, promocional, recreativo, esportivo e educacional, sem cunho partidário ou político.
      Suas atividades são abertas a todas as crianças, sem distinção de classe social, credo, raça ou etnia. A única exigência é que a criança esteja regularmente matriculada na escola e frequentando as aulas normalmente. Além, é preciso estar na faixa etária estipulada pela modalidade e que haja disponibilidade de vaga na ABDA.
      Nesta página, você pode preencher um cadastro, seguindo esses requisitos, para inserir o nome da criança na fila de espera nas modalidades NATAÇÃO, POLO AQUÁTICO ou ATLETISMO e aguardar contato da secretaria quando houver eventual vaga.
      Para as atividades musicais da ABDA Filarmônica, por enquanto, não haverá cadastro online. As respostas para as dúvidas mais frequentes sobre as atividades da ABDA você encontra no <a href="https://abdabauru.com.br/faq">Link</a>
    </p>
    <router-link :to="{ name: 'PersonalData' }">
      <b-button>Iniciar</b-button>
    </router-link>
  </b-container>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>

<style>
  .centralize {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .presentation {
    color: var(--light)
  }
</style>
