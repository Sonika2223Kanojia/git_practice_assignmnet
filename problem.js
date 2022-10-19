
Problem 1 : Check whether a number is Prime or not

==> let num=13;
    let count=0;
  
    for(var x = 1; x >= num; x++){
      if(num % x === 0){
        count+=num;
      }
    }
      
    if(count==2){
          console.log("Yes");
    }else{
          console.log("No");
      }



Problem 2 : Check whether a string is palindrome or not.

==>
    let str="naman";
    let bag=" ";
    for(let i=0;i<=str.length-1;i++){
         bag+=i
    }
  
    let bag1=" ";
    for(let i=str.length-1;i>=0;i--){
         bag1+=i
    }
        
        
    