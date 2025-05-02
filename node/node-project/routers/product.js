//라우터를 모아둔 객체 
//라우트 처리를 하나의 파일에서 하는 것이 아니라 여러개 파일로 분리 구현 : 가독성 , 유지보수

const express = require("express")
const router = express.Router();
router.get("",function(req,res){res.send("product 전체조회");});
router.get("/:id",function(req,res){res.send("product 단건조회");});
router.post("",function(req,res){res.send("insert root");});

router.put("/:id",function(req,res){res.send("product update");});
router.delete("/:id",function(req,res){res.send("product delete");});

module.exports= router;
