<template>
  <div class="alert alert-warning">
    <h2>{{title}}{{ subtitle }}</h2>
  </div>
</template>
<script>
export default{
  props:["title","subtitle"],
  data(){},
  methods :{},
  mounted() {},
  watch:{}
}
</script>