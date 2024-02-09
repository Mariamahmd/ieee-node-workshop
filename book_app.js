const express_moduel=require("express");
const { createBook, deleteBook,getBooks,getBook,updateBook } = require('./fun_book_app');
const app =express_moduel();
app.use(express_moduel.json());
app.route("/books").get(getBooks).post(createBook);
app.route("/books/:id").get(getBook).delete(deleteBook).patch(updateBook);
app.listen(4444,()=>{console.log("start listing on port 4444.......")})
