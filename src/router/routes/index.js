import Dashboard from '@/views/system/Dashboard.vue'
import WizardRoutes from './formWizard/wizard'
import NotFound from '@/views/system/404.vue'
import Infos from '@/views/system/Infos.vue'

const Routes = [
  {
    path: '/',
    component: Dashboard,
    name: 'Dashboard',
    meta: { title: 'Início' }
  },
  ...WizardRoutes,
  {
    path: '/informacoes',
    component: Infos,
    name: 'Infos',
    meta: { title: 'Informações' }
  },
  {
    path: '*',
    name: 'NotFound',
    meta: { title: 'Página não encontrada' },
    component: NotFound
  }
]

export default Routes
