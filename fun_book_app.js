const fs_moduel=require("fs").promises;
const express_moduel=require("express");
const app =express_moduel();
app.use(express_moduel.json());
const createBook = async (req, res) => {
    try {
      const newBook=req.body
      const data = await fs_moduel.readFile("library.json", "utf8");
      const books = JSON.parse(data);
      books.push(newBook);
      await fs_moduel.writeFile("library.json", JSON.stringify(books));
  
      res.json({
        message: "Book created successfully",
        data:books
      });
    } catch (err) {
     Error(console.log(err))
    }
  };
const deleteBook=async(req,res)=>{
    try{const data =await fs_moduel.readFile("library.json","utf8");
    const books=JSON.parse(data);
    const id=req.params.id
    const book=books.findIndex((b)=>b.id===id)
    books.splice(book,1)
    res.json({    
    message:`this is all books after removed book with id ${id}....`,
    data:books
})
}catch(err){res.json({message:"server error....:("})}
}
const getBooks=async(req,res)=>{
    try{
        const data=await fs_moduel.readFile("library.json","utf8");
        const books=JSON.parse(data);
        res.json({
            message:"this is all books....",
            data:books
        })
    }catch(err){res.json({message:"server error....:("})}
}
const getBook=async(req,res)=>{
    try{
        const data =await fs_moduel.readFile("library.json","utf8");
        const books=JSON.parse(data);
        const id=req.params.id
        const book=books.find((b)=>b.id===id)
        if (book===-1){
        return res.json({message:"this book not found"})}
        res.json({    
        message:"this is the book....",
        data:book
    })
}catch(err){res.json({message:"server error....:("})}

}
const updateBook = async (req, res) => {
    try{
        const data=await fs_moduel.readFile("library.json","utf8")
        const books=JSON.parse(data);
        const Id=req.params.id;
        const newBook=req.body;
        const index=books.findIndex((book)=>book.id===Id);
        if (index!=-1){
            books[index]=newBook
            await fs_moduel.writeFile("library.json",JSON.stringify(books),"utf8")
            res.json({
                message:"updating success",
                data:books
            })
        }else{res.json({message:"this id not found"})}
    }catch(err){
        Error(console.log(err))
    }
}
 module.exports = {
    createBook,
    deleteBook,
    getBooks,
    getBook,
    updateBook
}