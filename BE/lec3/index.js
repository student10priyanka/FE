const express=require("express");
const app=express();
const BookStore=[
    {id:1,name:"Harry-Potter",author:"DevFlux"},
    {id:2,name:"riends",author:"Vikas"},
    {id:3,name:"Nexus",author:"Rohit"}
   

]
app.get("/book",(req,res)=>{
    res.send(BookStore);
})
app.get("/book/:id",(req,res)=>{
  //  console.log(req.params);
  // res.send("Ye leijiye");
  const id=parseInt(req.params.id);
  const Book=BookStore.find(info=> info.id===id);
   res.send(Book);
})

app.listen(5000,()=>{
    console.log("Listening at port 5000")
})
  