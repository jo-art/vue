// app_mysql.js(라우트 복습)

//express 임포트
const express = require('express');
const cors = require('cors'); //cors 임포트
require("dotenv").config({path :"./mysql/.env"});


const app = express();//express 인스턴스 생성
const port = 3000;

app.use(cors());
//body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//라우트 설정
//엔드 포인트 endpoint
app.get('/',(req,res)=>{
  res.send("hello")
})

app.use("/customer",require("./routers/customer"))
app.use("/board",require("./routers/board"))
app.listen(port,()=>{
 console.log(`http://localhost:${port} 서버실행됨`)

});