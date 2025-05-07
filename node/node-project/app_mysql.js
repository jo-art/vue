// app_mysql.js(라우트 복습)

//express 임포트
const express = require('express');
const cors = require('cors'); //cors 임포트
const session = require('express-session'); 
const fileStore = require('session-file-store')(session);

require("dotenv").config({path :"./mysql/.env"});
const app = express();//express 인스턴스 생성
const port = 3000;

app.use(session({
  secret: '1234', //암호화하는 데 쓰일 키
  resave: false, // 세션에 변경사항이 없어도 항상 다시 저장할지 여부
  saveUninitialized: true, // 초기화되지 않은 세션을 스토어(저장소)에 강제로 저장할지 여부
  cookie: { // 세션 쿠키 설정 (세션 관리 시 클라이언트에 보내는 쿠키)
  httpOnly: true, // true 이면 클라이언트 자바스크립트에서 document.cookie로 쿠키 정보를 볼 수 없음
  secure: false, // true 이면 https 환경에서만 쿠키 정보를 주고 받도록 처리,
  maxAge: 60000 // 쿠키가 유지되는 시간 (밀리세컨드 단위)
  },
  store: new fileStore() // 세션 저장소로 fileStore 사용
  }));

// app.use(cors());
//body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());




//라우트 설정
//엔드 포인트 endpoint
app.get('/',(req,res)=>{
  res.send("hello")
})
app.use("/api/customer",require("./routers/customer"))
app.use("/api/board",require("./routers/board"))
app.use("/api/users",require("./routers/users"))
app.use("/api/comment",require("./routers/comment"))

app.listen(port,()=>{
 console.log(`http://localhost:${port} 서버실행됨`)

});