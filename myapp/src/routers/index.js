import { createMemoryHistory, createRouter } from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import MemberForm from '../views/MemberForm.vue'
import MovieForm from '../views/Movie.vue'
import ToDoForm  from '../views/ToDoForm.vue';
import EmpForm  from '../views/EmpForm.vue';
import ParamView from '@/views/ParamView.vue';
const routes = [
  { path: '/HelloWorld', component: HelloWorld},
  { path: '/memberForm', component: MemberForm },
  { path: '/Movie', component: MovieForm},
  { path: '/ToDoForm', component: ToDoForm },
  { path: '/EmpForm',component:EmpForm},
  {path: '/ParamView/:username',component:ParamView}
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;