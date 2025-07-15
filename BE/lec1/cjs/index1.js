
//Common JS Module --older way

const {sum,sub}=require("./index2");
//const sum=require("./index2");
sum(2,3);
sub(2,3)
console.log("End");
//therefore below is the workinng of above funciton

/*It is the working of CJS  common js module . 
as the function wrap up and there is the immediate invoking of function
   */
(function(){
    console.log("Hello ji i am second");
    function sum(a,b){
        console.log(a+b);

    }
    sum(2,3);
})();
console.log("Hello ia am first");