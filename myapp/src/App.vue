<script>
import GoodsView from './components/goods.vue';
import MemberForm from './views/MemberForm.vue';
import MovieForm  from './views/Movie.vue';
import ToDoForm  from './views/ToDoForm.vue';
import EmpForm  from './views/EmpForm.vue';
import ParamView from './views/ParamView.vue';
import { RouterLink,RouterView } from 'vue-router';
export default{
  components:{GoodsView,MemberForm,MovieForm,ToDoForm,EmpForm,ParamView}, //컴포넌트 선언

  data(){
   
    return {
    fruits : ["사과","바나나","포도"],
    message:"greeting"

  }
  },
  method:{}
}
</script>
<template>
  <div class="container">
  <h1>Hello App!</h1>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/"  class="nav-link active" aria-current="page" href="#">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/memberForm" class="nav-link " aria-current="page" href="#">회원가입</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/Movie" class="nav-link " aria-current="page" href="#">영화</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/EmpForm" class="nav-link " aria-current="page" href="#">emp</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/ParamView/kim" class="nav-link " aria-current="page" href="#">ParamView1</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/ParamView/park" class="nav-link " aria-current="page" href="#">ParamView2</RouterLink>
          </li>
          
      </ul>
    </div>
    </div>
  </nav>

  <main>
    <RouterView />
  </main>
</div>
</template>

<style scoped>

</style>
