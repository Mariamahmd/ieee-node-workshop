const mongoose_moduel=require("mongoose")
const Course=require("./database");
const getCourses=async(req,res)=>{
    try{ 
        let filter = {...req.query}
        const exclude = ['sort',"fileds"];
        exclude.forEach((i) => delete filter[i]);
     const query=Course.find(filter)
     if (req.query.sort){
        query.sort(req.query.sort.split(",").join(" "))
     }
     if (req.query.fileds){
        query.select(req.query.fileds.split(",").join(" "))
     }
     const courses= await query
     res.json({
     message:"All courses....",
     data:courses})} 
     catch (err) {
      console.log(err)
        res.json({ message: "oops!!!,Not found  ",error:err})}
}
const getCourse=async(req,res)=>{
    try{
     const course=await Course.findById(req.params.id)
     res.json({
     message:"this is the course....",
     data:course})} 
     catch (err) {
     res.json({ message: "oops!!!,there is error ",error:err})}
}
const createCourse=async(req,res)=>{
    try{
        const course=await Course.create(req.body);
        res.json({
          message:"Done....",
          data:course})
      } catch (err) {
        res.json({
            message: "oops!!!, ERROR :(",
            error:err})}
}
const deleteCourse=async(req,res)=>{
    try{
     await Course.findByIdAndDelete(req.params.id)
     res.json({
     message:"Done...."
     })} 
     catch (err) {
     res.json({ message: " ERROR :(  ",error:err})}
}
const editCourse=async(req,res)=>{

  try{
    const course=await Course.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json({
            message:"updating done...",
            data:course
        })
    
      }catch (err) {
         res.json({ message: "oops!!!,there is error ",error:err})}
}
module.exports = {
    createCourse,
    deleteCourse,
    getCourses,
    getCourse,
    editCourse
}