/*모듈 캡슐화,접근(노출) 범위 제어  */
 function myfunc(msg){
  console.log(msg); //이함수는 외부에서 접근,노출가능
}
 function myinfunc(msg){
  console.log(msg);
}
function defFunction(msg){
  console.log('default:',msg);
}
//export default defFunction;
export{myfunc,myinfunc};