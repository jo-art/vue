const boardlist ={
  selectList :"select * from board",
  selecById:"select * from board where id=?",
  insertInfo :"insert board (title,writer,content,created_date) values(?,?,?,sysdate())",
  updateInfo :"update board set ? where id=?",
  deleteInfo:"DELETE FROM board WHERE id = ?"
}
module.exports = boardlist;