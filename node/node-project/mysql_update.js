const mysql = require("mysql2"); 
// mysql 접속 정보
const conn = { host: "127.0.0.1", 
 port: "3306", 
 user: "root", 
 password: "admin", 
 database: "shop" };


// DB 커넥션 생성
let connection = mysql.createConnection(conn);


connection.connect((err) =>
  {
   if
  (err) {
   console.log
  ("error connection" + err
  .stack);
   return; 
   
  }
  });
  // 2. SQL 실행
  const id=1
  const data ={name:"치치",email:"aldkf@naver.d",phone:"010456123"}
  sql = "updqte customers set?where id=?"
  ;
  connection
  .query
  (sql, [data,id],function
  (err, results, fields) {
  if
  (err) { 
   console
  .log
  (err); 
   
  }
   // 3. 결과 처리
  console
  .log
  (results);
  });

  connection
  .end(); 
  