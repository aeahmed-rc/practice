console.log("hello");
/* Remove an exclamation mark from the end of a string.  */
function remove (string) {
    if(string.slice(-1)=='!'){
        return string.slice(0,-1)
    }else{
      return string
    }
      
   
   }
remove("!Hi")

function countPositivesSumNegatives(input) {
    let count = 0
    let total = 0
    console.log(input)
   if(Array.isArray(input) && input.length != 0){
    console.log(input)
      for(let i = 0;i<input.length;i++){
      if(input[i]>0){
        count++
      }else if(input[i]<0){
        total = total + input[i]
      }
      
  }
    return [count,total];
   }else{
       console.log("here")
     return []
   }
   
    }
  countPositivesSumNegatives([])