//consterSql.js
const commentsqllist ={
  selectList :"select * from comment where bid=?",
  insertInfo :"insert customers (writer,content,created_date) values(?,?,?,sysdate())",
  updateInfo :"update customers set ? where id=?",
  deleteInfo:"DELETE FROM customers WHERE id = ?"
}
module.exports = commentsqllist;
