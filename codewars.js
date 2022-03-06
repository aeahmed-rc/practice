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

    function isVeryEvenNumber(n) {
        // keep looping and adding value until it is a single value
        let sum =0
        num = n.toString();
       
   
      if(num.split('').length ==1 && num % 2!=0){
          console.log('false')
        return false
      }
        while(num >9){
            num = num.split('').map(Number).reduce((a, b) => a + b).toString();
            sum = num
          
            
        }
        if(sum % 2 ==0){
            console.log('true')
            return true
        }else {
            console.log('false')
            return false 
        }
        
        
      }
      function pr(n){
          num = n
          while(num>9){
              num = num.toString().split('').reduce((a,b) => +a + +b)// way to split and add digits over and over
            console.log(num)
          }
       
      }

      /* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. 
      Ignore letter case. */
      function isIsogram(str){
          // use set that stores all non duplicates 
          // if the length of the str isnt same as the set size then that means there were duplicates
        let s = str.toLowerCase()
        let st = new Set(s)
        console.log(st)
        console.log( s.length )
       }
      
       function isIsogr(str){
        var i, j;
        str = str.toLowerCase();
        for(i = 0; i < str.length; ++i)
          for(j = i + 1; j < str.length; ++j)
            if(str[i] === str[j])
              console.log(i ,str[j]);
        console.log(i ,str[j]);
      }
      function isVeryEvenNumb(n) {
        // keep looping and adding value until it is a single value
       let num = n
       
   
      if(num<10 && num % 2==0){
          console.log('true')
        return true
      }else if(num>10) {
        num = num.toString().split('').map(Number).reduce((a, b) => a + b).toString();
        isVeryEvenNumb(num)
      }else{
        console.log(num % 2 == 0 ? true : false)
        
      }
       
        
      }     
      function calc(x){
        let spl = x.split('')
        let value =''
        for(let i =0;i<spl.length;i++){
            value += spl[i].charCodeAt(0)
        }
        let arr = value.toString().split('').map(Number);
        let newarr = value.toString().split('').map(Number)
        console.log(newarr)
        for(let j = 0;j<arr.length;j++){
            if(arr[j] == 7){
                    arr[j] = 1
                  }else{
                      continue
                  }
        }
        console.log(arr,newarr)
        let sumone = arr.reduce(
            (a, b) => a + b,
            0
          );
        let sumtwo = newarr.reduce((a,b)=> a+b,0)
          console.log(sumone,sumtwo)
        let total =sumtwo-sumone
      
          
      
  
        console.log(total)
        }
       
        function unluckyDays(year){
            var count = 0;
               for (var month=0; month<12; month++) {
                   var d = new Date(year,month,13);
                   if(d.getDay() == 5){
                     count++;
                  }
               }
               return count;
           }
           function getLargerNumbers(a, b) {
            // two arrays compare each index with the other array
            let newArray = []
            for(let i =0;i<a.length;i++){
              if(a[i]>=b[i]){
                newArray.push(a[i])
              }else{
                newArray.push(b[i])
              }
            }
            return newArray;
          }

          function sum() {
            var total =  Array.prototype.slice.call(arguments).reduce((a,b)=> a+b,0)
            return total
              // return the sum of all arguments given.
            }

            function dontGiveMeFive(start, end)
            {
              let arr=[]
              for(let i = start;i<=end;i++){
                let st = i.toString()
                if(st.match(/[5]/g)){
                  continue
                }else{
                  arr.push(i)
                }
                
              }
            
              return arr.length;
            }



