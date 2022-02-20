console.log("hello");
function validateWord(s)
{
  // loop through put each value in map
  // add one 
  // if value is there add another one to it
  //if all values are same return true
  
  //Code goes here!
  let obj = {}
  let value = 1
  let st = s.toLowerCase()
  for(let i =0;i<st.length;i++){
    if(obj[st[i]]){
      obj[st[i]] += 1
    }else{
      obj[st[i]] = value
    }
}console.log(new Set(Object.values(obj)))
return new Set(Object.values(obj)).size === 1
}
function ev(s){
    console.log(new Set(s))
}


/* Given a non-negative integer, return an array / a list of the individual digits in order. */
function digitize(n) {
    let s = n.toString().split('').map(Number)
    return s
    }

    function per(n) {
      
           num = n.toString();
       
           let arr =[]
         if(num.split('').length ==1){
           return []
         }
           while (num.length > 1) {
          
               num = num.split('').map(Number).reduce((a, b) => a * b).toString();
               arr.push(num)
               
    
           }
           return arr.map(Number)
       }
  
       function paintLetterboxes(start, end) {
        const frequencies = new Array(10).fill(0);
        for(let number=start; number<=end; number++) {
          number.toString().split('').forEach(x => frequencies[x]++);
        }
        return frequencies;
      }

      function duplicateElements(m, n) {
      console.log(m,n)
        var bool = false
      if(m.length ==0 || n.length == 0 ){
         
        bool = false
      }
     for(let i =0;i<m.length;i++){
         let index = n.indexOf(m[i])
         console.log(index)
         if(index>-1){
             bool = true
             break
         }else{
             bool = false
         }
     }
     console.log(bool)
    }
    duplicateElements([2,1,3,4,5],[6, 1, 7, 8, 9])



