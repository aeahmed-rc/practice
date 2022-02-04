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