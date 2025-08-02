const express=require("express");
const app=express();
app.use(express.json());
const {auth}=require("./middleware/auth")
const food=[
    {id:1,foodd:"chowmein",category:"veg",price:1500},
    {id:2,foodd:"burger",category:"veg",price:50},
    {id:3,foodd:"Toad in Hole",category:"non-veg",price:5000},
    {id:4,foodd:"bitter guard",category:"veg",price:2500},
    {id:5,foodd:"Bubble and Squeak",category:"veg",price:3500},
    
]
const AddToCart=[

]
app.use("/admin",auth);
app.get("/food",(req,res)=>{
    res.status(200).send(food);     
})
app.post("/admin",(req,res)=>{
    
        food.push(req.body);
        res.send("Item added succesfuly");
    
})
app.delete("/admin/:id",(req,res)=>{
   
  
        const id=parseInt(req.params.id);
       const idx= food.findIndex(item=> item.id===id);
       if(idx===-1){
        res.send("Items does not exist");
       }else{ 
        food.splice(idx,1);
        res,send("Successfully deleted");
       }
    
})

app.patch("/admin",(req,res)=>{
   
     if(foodAdd){
            if(req.body.food){
                foodAdd.foodd=req.body.food;
            }
              if(req.body.category){
                foodAdd.category=req.body.category;
            }
              if(req.body.price){
                foodAdd.price=req.body.price;
            }
            
       
    }
})
app.listen(5000,()=>{
    console.log("Listening at this server");
})