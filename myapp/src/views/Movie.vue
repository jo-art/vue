<script>

export default{
                data(){
                  return{
                    targetDt:'20250423',  
                    todos :[ ]
                  }
                
                },
                methods:{ 
                
                  getMovie(){
                      fetch('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=12664b24453335d2c3eca0fdc4b3b013&targetDt='+this.targetDt)
                        .then(response => response.json())
                        .then(response => this.todos=response.boxOfficeResult.dailyBoxOfficeList)
                }},
                mounted(){
                  getMovie();
            
                      }
              }
</script>
<template>
   <input v-model="targetDt" @keyup.enter="getMovie"><button @click="getMovie">조회</button>
    <table>
      <tr v-for="todo in todos">
        <td>{{todo.rank}}</td>
        <td>{{todo.movieNm}}</td>
        <td>{{todo.openDt}}</td>
      
      </tr>
    </table>
</template>
<style>
</style>