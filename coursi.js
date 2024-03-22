const express_moduel=require("express");
const courses_router=require("./courses_router")
const app =express_moduel();
app.use(express_moduel.json());
app.use(courses_router)
app.listen(2003,()=>{console.log("start listing on port 2003.......")})
