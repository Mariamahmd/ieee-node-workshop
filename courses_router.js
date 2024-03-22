const express_moduel=require("express");
const  {createCourse, deleteCourse,getCourses,getCourse, editCourse} = require("./courses_fun")
const course_validator = require("./course_validator");
const courses_router=express_moduel.Router();
courses_router.route("/courses")
.get(getCourses)
.post(course_validator.createCourseV,createCourse);
courses_router.route("/courses/:id")
.get(course_validator.getCoureV,getCourse)
.delete(course_validator.deleteCourseV,deleteCourse)
.patch(course_validator.updateCourseV,editCourse);
module.exports=courses_router
