<template>
<table class="table">
    <thead>
      <tr>
        <th>사번</th>
        <th>이름</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(emp ,idx) in emps" :key="emp.id" @click="selectHandlder(idx)">
        <td>{{ emp.id }}</td>
        <td>{{ emp.first_name }} {{ emp.last_name }}</td>
        <td>
          <button @click="deleteEmp(emp.id)" class="ml-4 text-red-600">
            삭제
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import axios from 'axios';
axios.defaults.baseURL="/api/emp";
export default{
  data(){
    return{
      emps: []
    }
  },
  methods:{
    fetchList(){
          axios.get("")
              .then(response => this.emps=response.data)

      },
      deleteEmp(id){
        axios.delete(`/${id}`)
        .then(()=>this.fetchList())
      },
      selectHandlder(idx){
        this.$emit('select',this.emps[idx])
      }
  },mounted(){
    this.fetchList();
  }
}
</script>