const express = require("express"); //임포트
const router = express.Router();


//로그인 정보
router.get("/info",(req,res)=>{
  res.send({email:req.session.email})
})
//로그인 처리 get방식 login?email=aaaa 쿼리스트링 
//post 방식이면 body
router.post("/login",(req,res)=>{
  const  {email,pw} = req.body;
  //db 연동해서 로그인처리 (이 예제에선 )
  req.session.email = email;
  req.session.save(err =>{
    if(err) throw err;
    res.send({code:"success"});
  });
  
});
//로그아웃
router.post("/logout",(req,res)=>{
  req.session.destroy();
  res.send("logout success");
});

module.exports= router;