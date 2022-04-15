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



            function leastLarger(a,i) {
                // pull out the value at given i
                // sort the rest of array and return first value bigger then the value at i
               console.log(a,i)
                let arr = [...a]
                let value = arr[i]
                let newarr = a.sort(function(a, b) {
                return a - b;
              });
                
                
               let index = newarr.indexOf(value) 
               for(let i = index ; i<newarr.length;i++){
                 if(newarr[i]>value){
                   console.log(arr.indexOf(newarr[i]))
                   return arr.indexOf(newarr[i])
                 }else{
                   continue 
                 }
               
               }
                  return -1
               
              }


              function leastLarger(a, i) {
                const targetVal = a[i]
                const largerVals = a.filter(num => num > targetVal)
                console.log(largerVals)
                const leastLargeVal = Math.min(...largerVals)
                console.log(leastLargeVal)
                return a.findIndex(num => num === leastLargeVal)
            }
            function battle(x, y){
                const abc = z => z.codePointAt()
                const first = [...x].map((el)=> abc(el) < 91 ? abc(el) - 64 : (abc(el) - 96)/2 ).reduce((a, b)=> a + b, 0) 
                const second = [...y].map((el)=> abc(el) < 91 ? abc(el) - 64 : (abc(el) - 96)/2 ).reduce((a, b)=> a + b, 0)
                return first > second ? x : first < second ? y : 'Tie!' 
              }


              function smaller(nums) {
                // look at each value in the nums array
                // count how many numbers to the right of it are smaller
                //if the numbers is larger then current index increase count by 1
                //push the count to the current index
                let count = 0
                let arr = []
               for(let i = 0;i<nums.length;i++){
                 for(let j = i+1;j<nums.length;j++){
                   if(nums[j]<nums[i]){
                     count++
                   }else{
                     continue
                   }
                 }
                 arr.push(count)
                 count = 0
               }
                return arr
              }

              function compose(s1, s2) {
                // your code
              
              // from s1 its [0] 1 char [1] 2char, [2] 3 char so from s1 every line char amoutn goes up
              //from sw start at the end at take all charac then 1 less then previous, and then 2 less the previous,last line only first char of first line s2
              let s1Split = s1.split(/\r?\n/)
              let s2Split = s2.split(/\r?\n/)
              let strng =''
            
              for (let i = 0;i<s1Split.length;i++){
                strng+=s1Split[i].slice(0,i+1) + s2Split[s2Split.length-i-1].slice(0,s2Split.length-i)
                if(i<s1Split.length-1){
                  strng+= `\n`
                }
              }
             return strng
            
              
            }


            function nbDig(n, d) {
                let count = '';
                const re = RegExp(d, 'g');
                for (let i = 0; i <= n; i++){
                  count += i**2;
                }
                return count.match(re).length;  
              }
              //d was an integer that we needed to find all instances of from 0 to n^2

              function tetration(x,y){
                // we want to take x and raise that value to itself y times
                //y is 
              
                let arr = 1
                for(let i = 0;i<y;i++){
                 arr = x**arr
              
                }
                return arr
              
              
              }

              function center (strng, width, fill = ' ') {
                return strng.length > width
                  ? strng
                  : strng
                    .padStart(Math.ceil((width + strng.length) / 2), fill)
                    .padEnd(width, fill);
              }
        

              function makeValley(arr) {
                // input array 
                // retunr arry with left side descending, right side ascending
                // re sort array from ascending to descednding then create new array pulling values from 
                //orignal array 
                // make two arrays push values from arr to arr1 and arr2 
                
                let Larr = []
                let Rarr =[]
                console.log(Larr)
                
                const something= arr.sort(function(a, b) {
                return b- a;
              });
                for(let i=0;i<something.length;i++){
                  if(i %2 ==0){
                    Larr.push(something[i])
                  }else{
                    Rarr.unshift(something[i])
                  }
                 
                }
                 return Larr.concat(Rarr)
                
                
              
                  // Your code
              }



              function mxdiflg(a1, a2) {
                // loop through each array
                // take length of each of the array 1 string and subtract from each of the array2
                // push value to new array then get max value 
                // the way the loop works is first we do a1[0],a2[0],a1[0],a2[1]
                //second array loop goes thrpugh all values first then comes back and increases index of first array
                let arr =[]
              for(let i =0;i<a1.length;i++){
                for(let j =0;j<a2.length;j++){
                 arr.push(Math.abs(a1[i].length-a2[j].length))
                }
              }
               return arr.length>0?Math.max(...arr):-1
                 
              }



              function convert(number){
                // split value at every even index
                // go through each array i via map and get the ASCII letter
                //get the array join and return
                // ...Convert integers given as string into ASCII uppercase letters...
                
              
              let arr =number.match(number.length  % 2 ? /^\d|\d{2}/g : /\d{2}/g).map(String)
              // this code splits number into two digits, ex: 6565 = ['65','65']
            
              let newarr = arr.map(el=>String.fromCharCode(el))
              return newarr.join('')

              OR try this
              String.fromCharCode(...number.match(/../g))
              
               
                
                
              }

              function solution(str, ending){
                if (typeof(str) != "string" || typeof(ending) != "string")
                  throw "wrong type";
                if (ending.length>str.length)
                  return false;
                return str.substr(str.length-ending.length, ending.length) == ending;
              }

           
              function pattern(n){
                var result = '1'
                for (var i = 2; i <= n; i++){
                  result += '\n1' + '*'.repeat(i-1) + i
                }
                return result
              }

              let output='1'
              for(let i =2;i<=n;i++){
                output+='\n1'+ '*'.repeat(i-1) +i
              }
              let output = '1'
              for(let i =2 ;i<=n;i++){
                output+='\n1'+'*'.repeat(i-1)+i
              }

              function vowelIndices(word){
                let ar =[]
                word=word.toLowerCase()
                console.log(word)
              let vowel= ['a', 'e', 'i', 'o', 'u','y']
               word.split('').map((l,i) =>{
                 if(vowel.includes(l)){
                   ar.push(i+1)
                 
                 }
               })
              return ar
              }

              function arrAdder(arr) {
                var sentence = "";
                for(var i = 0; i < arr[0].length; i++){
                  for(var j = 0; j < arr.length; j++){
                    sentence+=arr[j][i];
                  }
                  sentence+=" ";
                }
                return sentence.trim();
              }

              const xMarksTheSpot = (input) => {
                if (input === undefined || input.length == 0) {
               return []
              }
                let count =0
                let arr = []
                for(var i = 0; i < input[0].length; i++){
                    for(var j = 0; j < input.length; j++){
                        if(input[j][i] == 'x'){
                          arr.push(j,i)
                          count++
                        }else{
                          continue
                        }
                    }
                                
                }
                
                return count==1?arr:[]
              }

              let stringMerge = (a, b, c) =>
    a.slice(0, a.indexOf(c))
  + b.slice(b.indexOf(c));


