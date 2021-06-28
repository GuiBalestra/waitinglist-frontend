import PersonalData from '@/views/waitingList/PersonalData.vue'
const WizardRoutes = [
  {
    path: '/dados-pessoais',
    meta: { title: 'Dados Pessoais' },
    name: 'PersonalData',
    component: PersonalData
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
  },
  {
    path: '/formulario-enviado',
    meta: { title: 'Formulário Enviado' },
    name: 'SendedForm',
    component: () => import('@/views/waitingList/SendedForm.vue')
  }
]

export default WizardRoutes
