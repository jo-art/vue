const express = require("express");
const router = express.Router();
const query = require('../mysql');

//댓글 전체조회
router.get("/:bid",async(req,res)=>{
    const bid=req.params.bid;
    const result = await query('comment',"selectById",bid);
    res.send(result);});

//댓글 등록
router.post("",async(req,res)=>{
    const result = await query('comment',"insertComment",[req.body.bid, req.body.writer,req.body.content]);
    res.send(result);
});
//댓글 수정
router.put("/:id",async(req,res)=>{
    const id = req.params.id;
    const result = await query('comment',"updateComment",[req.body.content,id]);
    res.send(result);
})
//댓글 삭제
router.delete("/:id",async(req,res)=>{
    const id = req.params.id;
    const result = await query('comment',"deleteComment",id);
    res.send(result);
})

module.exports= router;