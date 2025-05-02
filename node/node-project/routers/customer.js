//라우터를 모아둔 객체 
//라우트 처리를 하나의 파일에서 하는 것이 아니라 여러개 파일로 분리 구현 : 가독성 , 유지보수


const express = require("express");
const router = express.Router();
const query = require('../mysql');

//전체조회
router.get("",async(req,res)=>{
  const result = await query('customer',"selectList",null);
  res.send(result);});

//단건조회
  router.get("",async(req,res)=>{
    const id= req.params.id;
    const result = await query('customer',"selecById",id);
    res.send(result);});

// req.body, req.params , req.query, req.file
//등록
router.post("",async(req,res)=>{
  const result = await query('customer',"insertInfo",[req.body.name, req.body.email,req.body.phone]);
  res.send(result);
});


//수정
router.put("/:id",async(req,res)=>{
  const id= req.params.id;
  const result = await query('customer',"updateInfo",[req.body,id]);
  res.send(result);
});
//삭제
router.delete("/:id",async(req,res)=>{
  const id= req.params.id;
  const result = await query('customer',"deleteInfo",id);
  res.send(result);
});



module.exports= router;
