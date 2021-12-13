<template>
  <b-container class="d-flex justify-content-center">
    <div class="accordion mt-5" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header>
          <b-button class="info-header" block v-b-toggle.arena>ARENA ABDA</b-button>
        </b-card-header>
        <b-collapse id="arena" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <div>
              <b-card-text><strong>Modalidades:</strong><em> Natação e Polo Aquático</em></b-card-text>
              <b-card-text><strong>Endereço:</strong><em> Rua Fabio Geraldo, 2-12 – Jardim Solange – Bauru/SP</em></b-card-text>
              <b-card-text><strong>Horário de atendimento:</strong><em> segunda à sexta-feira, das 8h às 17h30</em></b-card-text>
              <b-card-text><strong>Telefone:</strong><em> (14) 3202-9259</em></b-card-text>
            </div>
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header>
          <b-button class="info-header" block v-b-toggle.adpm>ADPM</b-button>
        </b-card-header>
        <b-collapse id="adpm" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <div>
              <b-card-text><strong>Modalidades:</strong><em> Natação e Atletismo</em></b-card-text>
              <b-card-text><strong>Endereço:</strong><em> Rua Lúcio Luciano, 11-75 – Vargem Limpa – Bauru/SP</em></b-card-text>
              <b-card-text><strong>Horário de atendimento:</strong><em> segunda à sexta-feira, das 8h às 17h30</em></b-card-text>
              <b-card-text><strong>Telefone:</strong><em> (14) 3202-9259</em></b-card-text>
            </div>
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header>
          <b-button class="info-header" block v-b-toggle.oriente>CENTRO DE TREINAMENTO ATLETISMO (CAMPO DO ORIENTE)</b-button>
        </b-card-header>
        <b-collapse id="oriente" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <div>
              <b-card-text><strong>Modalidade:</strong><em> Atletismo</em></b-card-text>
              <b-card-text><strong>Endereço:</strong><em> Rua Capitão Mario Rossi, 10-75 – Jardim Petrópolis, Bauru – SP</em></b-card-text>
              <b-card-text><strong>Horário de atendimento:</strong><em> segunda à sexta-feira, das 8h às 11h e das 14h às 17h</em></b-card-text>
              <b-card-text><strong>Telefone:</strong><em> (14) 3245-6658</em></b-card-text>
            </div>
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header>
          <b-button class="info-header" block v-b-toggle.hipica>HÍPICA</b-button>
        </b-card-header>
        <b-collapse id="hipica" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <div>
              <b-card-text><strong>Modalidades:</strong><em> Natação e Polo Aquático</em></b-card-text>
              <b-card-text><strong>Endereço:</strong><em> Avenida José Henrique Ferraz, 7-15 – Jardim Terra Branca – Bauru/SP</em></b-card-text>
              <b-card-text><strong>Horário de atendimento:</strong><em> segunda à sexta-feira, das 8h às 17h30</em></b-card-text>
              <b-card-text><strong>Telefone:</strong><em> (14) 3202-9259</em></b-card-text>
            </div>
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header>
          <b-button class="info-header" block v-b-toggle.musica>ESPAÇO MÚSICA</b-button>
        </b-card-header>
        <b-collapse id="musica" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <div>
              <b-card-text><strong>Modalidades:</strong><em> Orquestra Filarmônica</em></b-card-text>
              <b-card-text><strong>Endereço:</strong><em> Rua Fabio Geraldo, 2-12 – Jardim Solange – Bauru/SP</em></b-card-text>
              <b-card-text><strong>Horário de atendimento:</strong><em> segunda à sexta-feira, das 8h às 17h30</em></b-card-text>
              <b-card-text><strong>Telefone:</strong><em> (14) 3202-9259</em></b-card-text>
            </div>
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header>
          <b-button class="info-header" block v-b-toggle.multicobra>MULTICOBRA</b-button>
        </b-card-header>
        <b-collapse id="multicobra" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <div>
              <b-card-text><strong>Modalidades:</strong><em> Natação e Polo Aquático</em></b-card-text>
              <b-card-text><strong>Endereço:</strong><em> Rua Cussy Junior, 12-83 – Centro – Bauru/SP</em></b-card-text>
              <b-card-text><strong>Horário de atendimento:</strong><em> segunda à sexta-feira, das 8h às 17h30</em></b-card-text>
              <b-card-text><strong>Telefone:</strong><em> (14) 3202-9259</em></b-card-text>
            </div>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </b-container>
</template>

<script>
export default {
  name: 'Info'
}
</script>

<style>
  .info-header {
    font-family: 'Raleway', sans-serif;
    background-color: var(--light-blue) !important;
  }
</style>
