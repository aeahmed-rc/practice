console.log("hello");
/* working with regex */

function divisors(integer) {
    // input number
    // get all numbers that are divide by this and become zero remainder
    // return the value in an array
    // if the integer is only divisible by itself then its a prime
    //loop should end at values == to or less then the integer
    
    let arr = []
    let n = []
    for(let i = 2;i<=integer;i++){
      if(integer % i ==0 ){
        arr.push(i)
    

      }else{
       continue
      }
      
    }
    if(arr.length >=2){
        arr.pop()
    }else{
        arr = `${integer} is prime`
    }
  return arr
  };
  divisors(13)


