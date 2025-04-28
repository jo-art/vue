<template>
  <h3>부모컴포넌트</h3>
  <ChildComponent @send-message="sendMessage"></ChildComponent>
</template>

<script>
import ChildComponent from '../components/ChildComponent.vue'
export default{
  components:{ChildComponent} ,
  // 자식컴포넌트 내용 나오려면 등록 후 태그 사용
  methods :{
    sendMessage(message){
      console.log(message)
    }
  }
}
</script>

