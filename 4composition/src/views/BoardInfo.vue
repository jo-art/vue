<template>
  <div class="container">
    <div class="row">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col" class="text-center table-primary">번호</th>
            <td scope="col" class="text-center">{{ boardInfo.id }}</td>
            <th scope="col" class="text-center table-primary">작성일</th>
            <td scope="col" class="text-center">
              {{ boardInfo.created_date }}
            </td>
            <th scope="col" class="text-center table-primary">이름</th>
            <td scope="col" class="text-center">{{ boardInfo.writer }}</td>
          </tr>

          <tr>
            <th colspan="2" class="text-center table-primary">제목</th>
            <td colspan="4">{{ boardInfo.title }}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="6" class="text-left" valign="top" height="200">
              <pre
                style="white-space: pre-wrap;
                  border: none;
                  background-color: white; "></pre>
                  {{boardInfo.content}}
            </td>
            
          </tr>
          <tr>
            <td colspan="6" class="text-center">
              <button
                class="btn btn-xs btn-info"  @click="goToUpdateForm(boardInfo.id)">
                수정
              </button>
              <button
                class="btn btn-xs btn-info"  @click="goToListForm()">
                삭제
              </button>
              <button
                class="btn btn-xs btn-info"  @click="goToListForm()">
                목록
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 댓글 -->
    <div class="row">
       <CommentComp :bid="searchNo"/>
    </div>
  </div>
</template>
<script setup>
import axios from 'axios';
import {ref} from 'vue';
import CommentComp from '@/components/CommentComp.vue';
import { useRouter, useRoute} from 'vue-router';

const router = useRouter();
const route = useRoute();

const searchNo=  route.params.id;
const boardInfo = ref({});




  const boardInfoList  = async  (id)=>{
  const response = await axios.get(`/api/board/2`);
  boardInfo.value = response.data[0];  // [0]이 맞는 구조인지 확인 필요
};

    function goToUpdateForm(id){
      router.push({path:'/boardForm', query : { id: id}});
    };
   
    function goToListForm(){
      router.push({path:'/boardList'});
    };
 
    function goTodeleteForm(id){
      router.push({path:'/boardForm', query : { id: id}});
    }
   
   
  boardInfoList();
</script>
