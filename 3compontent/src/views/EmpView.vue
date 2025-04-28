<template>
  <div class="row">
    <div class="col"><EmpList @select="selectHandlder" ref="listRef"/></div>
    <div class="col"><EmpForm :selEmp="selectedEmp" @saved="savedHandlder"/></div>
  </div>
</template>
<script>

import EmpList from '../components/EmpList.vue';
import EmpForm from '../components/EmpForm.vue';
export default{
  data(){
    return{selectedEmp: {first_name:'test'}}
  },
  components:{EmpList,EmpForm},
  methods:{
    selectHandlder(emp){
      this.selectedEmp = emp;
    }, savedHandlder(){
      this.$refs.listRef.fetchList();
    }

  }
}
</script>