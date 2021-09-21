const WizardRoutes = [
  {
    path: '/dados-pessoais',
    meta: { title: 'Dados Pessoais' },
    name: 'PersonalData',
    component: () => import('@/views/waitingList/PersonalData.vue')
  },
  {
    path: '/endereco',
    meta: { title: 'Endereço' },
    name: 'Address',
    component: () => import('@/views/waitingList/Address.vue')
  },
  {
    path: '/contato',
    meta: { title: 'Contato' },
    name: 'Contact',
    component: () => import('@/views/waitingList/Contact.vue')
  },
  {
    path: '/local-e-modalidade',
    meta: { title: 'Local e Modalidade' },
    name: 'ModalityLocalTraining',
    component: () => import('@/views/waitingList/ModalityLocalTraining.vue')
  },
  {
    path: '/confirmacao',
    meta: { title: 'Confirmação' },
    name: 'Confirmation',
    component: () => import('@/views/waitingList/Confirmation.vue')
  },
  {
    path: '/formulario-enviado',
    meta: { title: 'Formulário Enviado' },
    name: 'SendedForm',
    component: () => import('@/views/waitingList/SendedForm.vue')
  }
]

export default WizardRoutes
