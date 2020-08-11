import Index from './components/Index.vue'
import Detail from './components/detail.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/pic/:id', component: Detail }
]

export default routes;