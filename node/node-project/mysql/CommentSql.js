//consterSql.js
const commentlist ={
  selectById:"select * from comment where bid=?", //댓글 조회회
  insertComment :"insert comment (bid,writer,content) values(?,?,?)",//댓글 등록
  updateComment :"update comment set content=? where id=?", //댓글 수정
  deleteComment:"DELETE FROM comment WHERE id = ?" //댓글 삭제제
}
module.exports = commentlist;
