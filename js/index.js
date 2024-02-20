

function quotes(){

var author =["“Be yourself; everyone else is already taken.”" ,"“So many books, so little time.”" ,"“A room without books is like a body without a soul.”"
 ,"“So many books, so little time.”" ,"You miss 100% of the shots you don't take." ,"“In three words I can sum up everything I've learned about life: it goes on.” "]
 var quote =["--Oscar Wilde" ,"--Frank Zappa" ,"--Marcus Tullius Cicero" ,"-- Frank Zappa" ,"--Wayne Gretzy" ,"--Robert Frost" ]
 


 var num = Math.floor( Math.random()*quote.length)

 document.getElementById("authorOutput").innerHTML = (author [num]);
 document.getElementById("quoteOutput").innerHTML = (quote [num]);
 


}





 
