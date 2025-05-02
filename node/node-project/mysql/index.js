
//mysql/index.js
const mysql = require("mysql2"); 
const customer = require("./customerSql");
const board= require("./boardSql");
const sqllist ={customer:customer,board:board};


// mysql 접속 정보
const conn = {   
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_DATABASE,
  connectionLimit: process.env.DB_LIMIT};


// DB 커넥션풀 생성
let pool = mysql.createPool(conn);

const query=(table,sql,data)=>{
  return new Promise(function(resolve,reject){
    pool.query(sqllist[table][sql],data,(err,result)=>{
      if(err) reject(); //에러 로그용 명령어
      resolve(result);
    });
  })
}


//모듈 익스포트
module.exports = query;