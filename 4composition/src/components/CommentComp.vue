<template>
  <div>
    <h3>댓글</h3>
   
    <!-- 댓글 목록 표시 -->
    <div v-if="comments.length > 0">
      <ul>
        <li v-for="comment in comments" :key="comment.id">
          <p><strong>{{ comment.writer }}</strong> : {{ comment.content }}</p>
          <button @click="deleteComment(comment.id)">삭제</button>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>댓글이 없습니다.</p>
    </div>
   
    <!-- 댓글 입력 폼 -->
    <div>
      <textarea v-model="newComment" placeholder="댓글을 작성하세요..."></textarea>
      <button @click="addComment">댓글 작성</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    bid: {  // 부모 컴포넌트(boardInfo.vue)에서 전달된 게시글 ID
      type: Number,
      required: true
    }
  },
  data() {
    return {
      comments: [],  // 댓글 목록
      newComment: '', // 새로 입력할 댓글 내용
    };
  },
  created() {
    this.fetchComments();  // 컴포넌트가 생성될 때 댓글 목록을 가져옵니다
  },
  methods: {
    // 댓글 목록 가져오기
    async fetchComments() {
      try {
        const response = await axios.get(`/api/comment/${this.bid}`);
        this.comments = response.data;  // 댓글 목록을 저장
      } catch (error) {
        console.error("댓글을 불러오는 데 오류가 발생했습니다:", error);
      }
    },
   
    // 댓글 추가
    async addComment() {
      if (this.newComment.trim() === '') {
        alert("댓글을 입력하세요.");
        return;
      }

      try {
        const response = await axios.post(`/api/comment/${this.bid}`, {
          writer: "Anonymous",  // 댓글 작성자 (필요시 로그인 정보 등을 활용할 수 있습니다)
          content: this.newComment
        });

        this.comments.push(response.data);  // 새로운 댓글을 목록에 추가
        this.newComment = '';  // 댓글 입력란 초기화
      } catch (error) {
        console.error("댓글 작성에 오류가 발생했습니다:", error);
      }
    },

    // 댓글 삭제
    async deleteComment(id) {
      if (confirm("이 댓글을 삭제하시겠습니까?")) {
        try {
          await axios.delete(`/api/comment/${id}`);
          this.comments = this.comments.filter(comment => comment.id !== id);  // 삭제된 댓글을 목록에서 제거
        } catch (error) {
          console.error("댓글 삭제에 오류가 발생했습니다:", error);
        }
      }
    }
  }
};
</script>