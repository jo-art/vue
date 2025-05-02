const express = require("express");
const router = express.Router();
const query = require('../mysql');

//전체조회
router.get("",async(req,res)=>{
  const result = await query('board',"selectList",null);
  res.send(result);});

//단건조회
  router.get("/:id",async(req,res)=>{
    const id= req.params.id;
    const result = await query('board',"selecById",id);
    res.send(result);});

// req.body, req.params , req.query, req.file
//등록
router.post("",async(req,res)=>{
  const result = await query('board',"insertInfo",[req.body.title, req.body.writer,req.body.content]);
  res.send(result);
});

//수정
router.put("/:id",async(req,res)=>{
  const id= req.params.id;
  const result = await query('board',"updateInfo",[req.body,id]);
  res.send(result);
});
//삭제
router.delete("/:id",async(req,res)=>{
  const id= req.params.id;
  const result = await query('board',"deleteInfo",id);
  res.send(result);
});

module.exports= router;