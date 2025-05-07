import {createStore} from 'vuex' // 함수 임포트
const store = createStore({
state(){ //프로젝트 전체에서 공통으로 사용할 변수 vue탬플릿에 data와 같은 것
 return { count: 0 ,loginYn:false,email:'' } 
},
mutations : { //state를 변경하는 역할 : methods랑 같은 역할
increment(state) { 
 state.count++; 
 },
 loginSuccess(state) { 
  state.loginYn =true; 
},
 changeEmail(state,payload) { 
  state.email =payload.email; 
  }
},
actions:{
  login(context,payload){
    context.commit('changeEmail',payload);
    context.commit('loginSuccess');
  }
}
})
export default store;