<template>
  provude
 <ProvideInjectChild/>
</template>
<script>
import ProvideInjectChild from '../views/ProvideInjectChild.vue';

export default{
  components:{ProvideInjectChild},
  data(){
    return {
      items:['A','B']
    };
  },
  provide(){
    return{
      itemLength:this.items.length
    };
  }
}
</script>