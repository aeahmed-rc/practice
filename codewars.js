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
  
       var paintLetterboxes = function(start, end) {
        let obj ={}
        let arry =[]
        let num = []
        let count =0
      for(let i = start;i<=end;i++){
          num=i.toString().split('').map(Number)
        // console.log(num.length)
        for(let j = 0;j<=num.length;j++){
           console.log(num)
            //num 1,2,5
            let t = num[j] //ex t =1 
           
            if(arry[t] >=1){
                arry[t]++
            }else{
                arry[t] = 1
            }
            
            // arry[num[j]]++
              
      }
      
  }
      console.log(arry)
   
      }
   
      paintLetterboxes(125,127)


