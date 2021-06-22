import AppLayout from '@/layouts/App'
import WizardRoutes from './formWizard/wizard'
import NotFound from '@/views/system/404.vue'

const Routes = [
  {
    path: '/',
    component: AppLayout,
    redirect: '/get-started',
    children: [
      {
        path: '/get-started',
        name: 'Start',
        meta: { title: 'Início' },
        component: () => import('@/views/system/start.vue')
      },
      ...WizardRoutes,
      {
        path: '*',
        meta: { title: 'Página não encontrada' },
        component: NotFound
      }
    ]
  }
]

export default Routes
