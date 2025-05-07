<template>
  <div class="container">
    <form @submit.prevent>
      <label for="no">No.</label>
      <input type="text" id="no" v-model="boardInfo.id"/>
      
      <label for="title">제목</label>
      <input type="text" id="title"  v-model="boardInfo.title" />

      <label for="writer">작성자</label>
      <input type="text" readonly v-model="boardInfo.created_date" />

      <label for="content"  >내용</label>
      <textarea
        id="content"
        style="height: 200px"
        v-model="boardInfo.content" 
      ></textarea>

      <label for="regdate">작성일자</label>
      <input type="text" readonly   v-model="boardInfo.created_date"  />

      <button
        type="button"
        class="btn btn-xs btn-info"
        @click="saveBoard(boardInfo.id)"
      >
        저장
      </button>

      <button
        type="button"
        class="btn btn-xs btn-info"
        @click="delteBoard(boardInfo.id)"
      >
        삭제
      </button>
     
    </form>
  </div>
</template>
<script>
import axios from 'axios';
export default{
 
  data(){
    return{
      searchNo:"",
      boardInfo:{  }
    };
  },created(){
    this.searchNo = this.$route.query.id || "";
     console.log(this.searchNo);
    if(this.searchNo>0){
      this.boardInfoList();
    }
  },
  computed:{
    dataFormat(){
      return this.boardInfo.created_date.substr(0,10)
    }
  },
  
  methods:{
    async boardInfoList(){
      let board= await axios.get(`/api/board/${this.searchNo}`);
      this.boardInfo = board.data[0];
    },
    async saveBoard(id){
      const url ="/api/board";
      let param={
        title:this.boardInfo.title,
        content:this.boardInfo.content,
        writer: this.boardInfo.writer
      };
      //수정
      if(id>0){
        const result  = await axios.put(`${url}/${id}`,param);
        alert("정상적으로 수정되었습니다");
        this.$router.push({path:"/boardList"});
      }//등록
      else{
        const result = await axios.post(url,param);
        alert("정상적으로 등록되었습니다");
        this.$router.push({path:"/boardList"});
      }
    },
    async delteBoard(id){
      if (!id || id <= 0) {
       alert("삭제할 게시글이 없습니다.");
        return;
      }

      const confirmed = confirm("정말로 삭제하시겠습니까?");
      if (!confirmed) return;

      try {
        await axios.delete(`/api/board/${id}`);
        alert("삭제가 완료되었습니다.");
        this.$router.push({ path: "/boardList" });
      } catch (error) {
        console.error("삭제 오류:", error);
        alert("삭제 중 오류가 발생했습니다.");
      }
    }
  }
}
</script>
<style scoped>
/* Style inputs with type="text", select elements and textareas */
input[type="text"],
select,
textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical; /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */
button[type="button"] {
  background-color: #04aa6d;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
button[type="button"]:hover {
  background-color: #45a049;
}

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>
