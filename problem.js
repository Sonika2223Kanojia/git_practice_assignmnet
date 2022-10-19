
//Problem 1 : Check whether a number is Prime or not

//==> 
    let num=13;
    let count=0;
  
    for(var x = 1; x <= num; x++){
      if(num % x == 0){
        count++;
      }
    }
      
    if(count==2){
          console.log("Yes");
    }else{
          console.log("No");
      }



//Problem 2 : Check whether a string is palindrome or not.

//==>
    let str="naman";
    let bag=" ";
   
    for(let i=str.length-1; i>=0; i--){
     
     bag+=str[i]
}

  if(bag==str){
  console.log("Palindrome")
}else{
console.log("Not Palindrome")
}
        
        
    