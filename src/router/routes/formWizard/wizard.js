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
    path: '/lista-de-espera',
    meta: { title: 'Lista de Espera' },
    name: 'WaitingList',
    component: () => import('@/views/waitingList/WaitingList.vue')
  }
]

export default WizardRoutes