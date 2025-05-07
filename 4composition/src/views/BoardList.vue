<template>
  <div class="container">
    
    <table class="table table-hover">
      <thead>
        <tr>
          <th>No.</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일자</th>
          <th>댓글 수</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(board,idx) in boards" :key="board.id" @click="goToDetail(board.id)">
          <td>{{ board.id }}</td>
          <td>{{ board.title }}</td>
          <td>{{ board.writer}}</td>
          <td>{{ board.created_date}}</td>
          <td>{{ board.comment}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import axios from 'axios';
import {ref} from 'vue';
import { useRouter, useRoute} from 'vue-router';

const router = useRouter();
const route = useRoute();
const boards = ref([]);

  const  boardList = async()=>{
      let result = await axios.get(`/api/board`);
      boards.value = result.data;
    };
    boardList();
  
//  const goToDetail =()=>{};
function goToDetail(id){
  router.push(`/boardInfo/${id}`);
 
} 
</script>
<style scoped>
table * {
  text-align: center;
}
</style>
