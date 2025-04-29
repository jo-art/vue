<template>
  <FancyButton>팬시버튼</FancyButton>
  <FancyButton>저장하기</FancyButton>
  <SlotModalLayout>
    <template v-slot:header>
      <h1>팝업타이틀</h1>
    </template>
    <template v-slot:default>
      <p>팝업컨텐츠1</p>
      <p>팝업컨텐츠2</p>
    </template>
    <template v-slot:footer>
      <button type="button">닫기</button>
    </template>

  </SlotModalLayout>
  <hr></hr>
<ProvideInject/>
</template>
<script>
import FancyButton from '../components/FancyButton.vue';
import SlotModalLayout from '../components/SlotModalLayout.vue';
import ProvideInject from '../views/ProvideInject.vue';
export default{
  components:{FancyButton,SlotModalLayout,ProvideInject}
}
</script>