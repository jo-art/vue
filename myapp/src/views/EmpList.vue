<script>
import axios from 'axios'
export default{
  data(){
    return {emps:[]}
  },
  mounted(){
    axios.get("/empdata.json")
      .then(response=>this.emps = response.data)
  }
}

</script>
<template> 
  <table>
    <tr v-for="item in emps">
      <td>{{item.employee_id}}</td>
      <td>{{item.first_name+emps.last_name}}</td>
      <td>{{ item.email }}</td>
      <td>{{ item.salary }}</td>

    </tr>
  </table>
</template>
<style></style>