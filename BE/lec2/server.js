const http=require("http");
const server=http.createServer((req,res)=>{// the req. send by client is in req and response send by server 
   // res.end("Hello cdoder army");// whomever visited my site i want to respond it with hello coder army});//createServer return an object storein http
if(req.url==="/"){
    res.end("hello coder army");

}else if(req.url==="/contact"){
    res.end("This is our contact page");
}
else if(req.url==="/about"){
    res.end("This is our about page");
}
else {
    res.end("ERROR");
}
})
server.listen(4000,()=>{
console.log("I am listening at port no 30");
})