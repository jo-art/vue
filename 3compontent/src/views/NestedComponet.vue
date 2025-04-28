<template>
  <PageTitle :title="title"/>
  <BlogPost :likes="50" :is-published="true" :comment-ids="[100,103,200]" /> //정적바인딩
  <PageTitle :title="title"/>
  <!-- <BlogPost :title="post.title" :likes="post.likes" :is-published="post.isShow" :comment-ids="post.commentIds"/> //동적바인딩 -->
  <BlogPost v-bind="post"/> 
  <!-- 객체 자체를 넘겨 사용 -->
   <hr>
   <BlogPost v-for="post in posts" v-bind="post"/>
</template>
<script>
import PageTitle from '../components/PageTitle.vue';
import BlogPost from '../components/BlogPost.vue'
 export default{
  components:{PageTitle,BlogPost}, //현재 컴포넌트에서 사용할 컴포넌트 등록
  data(){
    return{title :'동적 페이지 이름',
            posts:[{ isPublished : true,likes:100,title:"블로그1"},
            { isPublished : true,likes:100,title:"블로그2"},
            { isPublished : true,likes:100,title:"블로그3"},
            ],
            post:{
              isShow : true,
              likes:100,
              title:"vue 블로그",
            commentIds:[15,22,24]}
    }
  }
 }
</script>