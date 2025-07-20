const date=new Date();
const date2=new Date("2025-07-26T00:00:00");
const diff=date2-date;
const days=Math.floor(diff/(1000*60*60*24));
const hours=Math.floor(diff/(1000*60*60)%24);
const minutes=Math.floor(diff/(1000*60)%60);
const sec=Math.floor(diff/(1000)%60);

console.log("Happy Birthday "+days+ " days "+ hours+"hours "+minutes+"minutes "+sec+"second ");

