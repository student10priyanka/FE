let str="HelloWorld";
console.log(str.toUpperCase());
//reverse
let reversedStr=str.split("").reverse().join("");
console.log(reversedStr);
//check if a string is palindrome
let str2="madam";
if(str2==str2.split("").reverse().join("")){
    console.log("Yes");

}else{
    console.log("not");
}

//count a in bananna;
let str3="banana";
let count=0;
for(let char of str3){
    if(char==="a") count++;
}
console.log(count);

//convert first leet of string uppercase;
let str4="hello";
let result=str4[0].toUpperCase()+str4.slice(1);
console.log(result);

//count vowels
let str5="Priyanka";
let count1=0;
let vowels="aeiouAEIOU";

for(let charr of str5){
    if(vowels.includes(charr)){
        count1++;
    }
}
console.log(count1);

//capitalize first letter of evry word


//replace all spaces with hypens
let str7="I love coding";
let resultt=str7.replaceAll(" ","-");
console.log(resultt);


//longest word in a sentence
let sent="I am learning JavaScript right now";
let words=sent.split(" ");
let long="";
for(let word of words){
    if(word.length>long.length){
        long=word;
    }
}
console.log(long);
//remove all non alphanumeric characters
let str8="H3llo W@rld";
let clean =str8.replace(/[^a-zA-z]/g,"`");
console.log(clean);

//to print all objects
let fruits={
    apple:3,
    banana:5,
    mangp:8
};
console.log(Object.keys(fruits));

