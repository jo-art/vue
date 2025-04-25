<script>
      export default{
            data(){
              return{
                options:[{text:"A",value:'가'},{text:"B",value:'나'},{text:"C",value:'다'},{text:"D",value:'라'}],
                checkedNames:["John"],
                picked:"Two",
                message : "",
                checked: true,
                selected:['a','b','c']
                    }
            },
            methods:{
              memberInsert(){
                alert("회원가입완료");
                this.$router.push("/");
              }
            }
          }
</script>
<template>
    <div class="card" >
    <div class="card-body">
      <p>메세지: {{ message }}</p>
        <input v-model="message" placeholder="메세지입력하기" />

        <input type="checkbox" id="checkbox" v-model="checked"/>
        <label for="checkbox">{{ checked }}</label> 

        <div>Checked names: {{ checkedNames }}</div>

        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames" />
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
        <label for="mike">Mike</label>


        <div>Picked: {{ picked }}</div>

        <input type="radio" id="one" value="One" v-model="picked" />
        <label for="one">One</label>
        <input type="radio" id="two" value="Two" v-model="picked" />
        <label for="two">Two</label>

        <div>Selected: {{ selected }}</div>

        <select v-model="selected" multiple>
          <option disabled value="">Please select one</option>
          <option v-for="item in options" :value="item.value">{{item.text}}</option>
        
        </select>
        <button @click="memberInsert()">등록</button>

      </div>
    </div>
</template>
<style scoped>

</style>