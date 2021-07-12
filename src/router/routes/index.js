import Dashboard from '@/views/system/Dashboard.vue'
import WizardRoutes from './formWizard/wizard'
import NotFound from '@/views/system/404.vue'
import Links from '@/views/system/Links.vue'

const Routes = [
  {
    path: '/',
    component: Dashboard,
    name: 'Dashboard',
    meta: { title: 'Início' }
  },
  ...WizardRoutes,
  {
    path: '/fale-conosco',
    component: Links,
    name: 'Links',
    meta: { title: 'Fale conosco' }
  },
  {
    path: '*',
    meta: { title: 'Página não encontrada' },
    component: NotFound
  }
]

export default Routes
