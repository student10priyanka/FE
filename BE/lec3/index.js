const express=require("express");
const app=express();
app.use(express.json());
const BookStore=[
    {id:1,name:"Harry-Potter",author:"DevFlux"},
    {id:2,name:"riends",author:"Vikas"},
    {id:3,name:"Nexus",author:"Rohit"}
   

]

app.get("/book",(req,res)=>{
const id=req.query;
const Book=BookStore.filter(info=>info.author===req.query.author);

    res.send(Book);
})
app.get("/book/:id",(req,res)=>{
  //  console.log(req.params);
  // res.send("Ye leijiye");
  const id=parseInt(req.params.id);
  const Book=BookStore.find(info=> info.id===id);
   res.send(Book);
})
app.post("/book",(req,res)=>{
    //console.log(req.body);
BookStore.push(req.body);
res.send("data saved successfully");
})

app.patch("/book",(req,res)=>{
    console.log(req.body);
    const Book=BookStore.find(info=>info.id===req.body.id);
    if(req.body.name){
        Book.name=req.body.name;
    }
    if(req.body.author){
        Book.author=req.body.author;
    }
    res.send("Data saved");
})
app.delete("/book/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const index=BookStore.findIndex(info=>info.id===id);
    console.log(index);
    BookStore.splice(index,1);
    res.send("Succesfull");
})

app.listen(5000,()=>{
    console.log("Listening at port 5000")
})
  