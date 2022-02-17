console.log("hello");
/* You need to create a function, helloWorld, that will return the String Hello, World! without actually using raw strings. This includes quotes, double quotes and template strings. 
You can, however, use the String constructor and any related functions. */
const helloWorld = (s) => {
    // feel free to change this into a function :)
    let str = new String(/Hello, World!/)
    
   return str.substring(1,str.length-1)
  
  };
// convert to binary or hex
  function evensAndOdds(num){
	//your code here
  if(num % 2 == 0){
    return num.toString(2)
  }else{
    return num.toString(16)
  }
}




