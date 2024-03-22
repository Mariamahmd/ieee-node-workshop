const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/coursi_db")
const Schema= new mongoose.Schema({
    info:{
        track:String,
        name:String,
        level:String,
        videoes:Number,
        hours:Number 
    },
    requirements:String,
    instractor:{
        name:String,
        qualifications:String,    
    },
    price:Number
})
const Course=mongoose.model("Course",Schema);
const course1 = new Course({     info:{
    level:1, 
    track:"Network",
    name:"CCNA",
    videos:40,
    hours:15,
    
},
requirements:"No requirements ",
instractor:{
    name:"Ali",
    qualifications:"Network engineer",
},
price:200
})
.save()
.then(()=>{console.log("adding 1 done...")})
.catch((err)=>{console.log(err)})
const course2 = new Course({     info:{
    level:2,
    track:"Network",
    name:"CCNP",
    videoes:66,
    hours:18,
    
},
requirements:"CCNA ",
instractor:{
    name:"Ali",
    qualifications:"Network engineer",
},
price:300
})
.save()
.then(()=>{console.log("adding 2 done...")})
.catch((err)=>{console.log(err)})
const course3 = new Course({     info:{
    level:2,
   track:"programming",
    name:"python",
    videos:171,
    hours:21,
  
},
requirements:"cs50",
instractor:{
    name:"osama",
    qualifications:"computer science engineer",
},
price:100
})
.save()
.then(()=>{console.log("adding 3 done...")})
.catch((err)=>{console.log(err)})
const course4 = new Course({     info:{level:1,
    track:"cyber security",
    name:"ejpt v1",
    videoes:50,
    hours:38,
 
},
requirements:"Network fundmental,OS",
instractor:{
    name:"Ahmed",
    qualifications:"computer science engineer",
},
price:100
})
.save()
.then(()=>{console.log("adding 4 done...")})
.catch((err)=>{console.log(err)})
const course5 = new Course({  
    info:{
    level:3,
    track:"cyber security",
    name:"ecir",
    videoes:50,
    hours:38,
 
},
requirements:"ejptv2",
instractor:{
    name:"Ahmed",
    qualifications:"computer science engineer",
   
},

price:200
})
.save()
.then(()=>{console.log("adding 5 done...")})
.catch((err)=>{console.log(err)})
const course6= new Course({
    info:{
    level:2,
    track:"cyber security",
    name:"ejpt v2",
    videoes:50,
    hours:38,
 
},
requirements:"ejptv1",
instractor:{
    name:"Ahmed",
    qualifications:"computer science engineer",
   
},

price:150
})
.save()
.then(()=>{console.log("adding 6 done...")})
.catch((err)=>{console.log(err)})
module.exports=(Course)
