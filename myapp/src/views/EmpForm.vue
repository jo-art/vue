<script>
import axios from 'axios';
export default{
        data(){
          return {
            depts:[
              {dno:10,dname:"개발"},
              {dno:20,dname:"인사"},
              {dno:30,dname:"총무"}
            ],

            emp:{
              employee_id :"100",
              first_name:"길동",
              last_name:"홍",
              email:"alsdl7139@naver.com",
              phone_number:"010-111-111",
              hire_date:"",
              job_id:"",
              salary:"",
              commission_pct:"",
              manager_id:"",
              department_id:"20"
            }
          }

        },
        methods:{
          empBtn(){
            console.log(this.emp);
          }
        }
    }
  
</script>
<template>
  <div>
      사번:<input v-model="emp.employee_id"><br>
      fname:<input v-model="emp.first_name"><br>
      lname:<input v-model="emp.last_name"><br>
      jobid :<input type="radio" v-model="emp.job_id" value="it">IT
      <input type="radio" v-model="emp.job_id" value="sales">SALES
      부서:<select v-model="emp.department_id">
        <option v-for= "item in depts" :value="item.dno">{{item.dname}}</option>
      </select><br>
      <button @click="empBtn">수정</button>
    </div>  
</template>
<style>
</style>