console.log("hello");

/*
Create a method each_cons that accepts a list and a number n, 
and returns cascading subsets of the list of size n, like so:

create arrays with 2 values in each array from the given array
ex: each_cons([1,2,3,4], 2)
  #=> [[1,2], [2,3], [3,4]]
  to get 2 values in each then we start with slice(0,2)which will give [1,2] to continue then the slice always has to 
  be in a range of 0 to n and when 0 goes up then n has to as well

*/

/* multiliine comment use shift-option-A */

function eachCons(array, n) {
    let result=[]
    for(let i = 0;i<=array.length;i++){
        if(n+i<=array.length){
            result.push(array.slice(i,n+i))
        }else{
            continue
        }
    }


	return [result];
}
eachCons([1,2,3,4],2)

/* Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:
 */

function findNeedle(haystack) {
    for(let i =0;i<=haystack.length;i++){
      if(haystack[i] =='needle'){
        return `found the ${haystack[i]} at position ${i}`
      }else{
        continue
      }
    }
    // your code here
  }


  function remove (string) {
    let newstring = string.replaceAll('!','')
    console.log(newstring)
    console.log(`${newstring}`+ '!')
    
     return  `${newstring +'!'}`;  
   }


   function remove (string) {
    let newstring = string.split('!').join('')
    console.log(newstring)
    // console.log(`${newstring}`+ '!')
    
     return  `${newstring +'!'}`;  
   }
   remove('Hi!!!')


   /* You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter. */
// area of square is l*w, perimeter of rectangle is add all 4 sides 
const areaOrPerimeter = function(l , w) {
    if(l == w){
      return l*w
    }else{
      return 2*(l+w)
    }
  };

  /* Write a function that accepts arbitrary X and Y resolutions and converts them into resolutions with a 16:9 aspect ratio that maintain equal height. Round your answers up to the nearest integer. */
  function aspectRatio(x,y){
    let result = []
    let asp = Math.ceil((16/9) * y)
    result = [asp,y]
  
  
  return result
  
  }
/* 
There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

number of pillars (≥ 1);
distance between pillars (10 - 30 meters);
width of the pillar (10 - 50 centimeters).
Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).
*/

  function pillars(num_pill, dist, width) {
    // your code here
    return num_pill>1?(num_pill-1)*dist*100+(num_pill-2)*width:0;
  }