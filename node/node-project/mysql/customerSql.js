//consterSql.js
const sqllist ={
  selectList :"select * from customers",
  selecById:"select * from customers where id=?",
  insertInfo :"insert customers (name,email,phone) values(?,?,?)",
  updateInfo :"update customers set ? where id=?",
  deleteInfo:"DELETE FROM customers WHERE id = ?"
}
module.exports = sqllist;
