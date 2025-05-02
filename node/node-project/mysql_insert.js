
  
  const pool = require("./mysql")
  // 2. 풀로 이용한 SQL 실행
  const data ={name:"정길정",email:"alf@nar.d",phone:"010456123"}
  sql = "insert customers (name,email,phone) values(?,?,?)";
  pool.query(sql, [data.name,data.email,data.phone],function(err, results, fields) {
    if(err) { 
   console.log(err); 
   }
   // 3. 결과 처리
  console.log(results);
  });


  