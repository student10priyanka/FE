console.log("start");
function sum(a,b){
    console.log(a+b);

}
function sub(a,b){
    console.log(a-b);
}
console.log(module.exports);//empty object {}
module.exports={sum,sub};
//module.exports.sum=sum;
//module.exports={sum:sum,sub:sub};




