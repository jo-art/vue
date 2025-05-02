function wakeUp(callback) {
  setTimeout(() => {
    console.log("1. 일어났어요! ⏰");
    callback();
  }, 1000);
}

function washFace(callback) {
  setTimeout(() => {
    console.log("2. 세수했어요! 💦");
    callback();
  }, 1000);
}

function shower(callback) {
  setTimeout(() => {
    console.log("2. 샤워했어요! 💦");
    callback();
  }, 1000);
}
function eatBreakfast(callback) {
  setTimeout(() => {
    console.log("3. 아침 먹었어요! 🍞");
    callback();
  }, 1000);
}
//비동기 처리 => 동기식 처리 1. 콜백함수 -> 콜백 지옥 => pomise함수로 해결
wakeUp(()=>{
  washFace(()=>{
    eatBreakfast(()=>{
      console.log("준비완료")
    });
  }); // 콜백함수에 인수 있는 경우 매퍼함수로 감싸야 실행가능
});  // 콜백함수 지옥에 들어가가되는거임,, 그래서 promise가 나옴
