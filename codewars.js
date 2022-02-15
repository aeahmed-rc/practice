console.log("hello");
/* working with regex */
function shortcut (string) {
    let word = string.replace(/[aeiou]/g,'')
    return word
  }

  
  /* You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters. */

//   function getMiddle(s)
// {
 // get length of s if even the middle two is half and plus 1
  //if odd then add 1 to length and divde by 2 and add 1 will give 
  //Code goes here!
//   let char = ""
//   let x = ''
//   let y =''
//   let len = s.length/2
//   let lenodd = s.length+1
//     if(s.length %2 == 0){
//       x = s[len]
//       y =s[len-1]
//      char = y+x
//   }else{
//     x = s[(lenodd/2)-1]
//     char = x
//   }
//   return char
// }

// function practiceslice(){
//     let s = 'testg'
//     console.log(s.slice(1.5,3))
// }
// practiceslice()

//   function decode(string) {
//     let decodedString = ''
//    let decodeone={0:5,
//              1:9,
//              2:8,
//              3:7,
//              4:6
//              }
    
//     for(let i =0;i<string.length;i++){
//         for(const [key,value] of Object.entries(decodeone)){
//             if(string[i] == key){
//                 decodedString += value
//                 // console.log(decodedString)
//             }else if(string[i] == value){
//                 decodedString+=key
//                 // console.log(decodedString)
//             }else{
//                 continue
//             }
//         }
//     }
//  return decodedString
//   }
  

//   const decode = s => s.replace(/./g, c => '5987604321'[c]);
//   const decode = string => [...string].map($ => '5987604321'[$]).join('')

//   /* linked list length */
//   function length(head) {
//     this.head = head
//     let count = 0
//     if(head == null){
//       return count
//     }
//     while (head != null) {
//                 if (count == head.data)
//                     return head.data;
//                 count++;
//                 head = head.next;
//             }
    
//       return count;
//         }

function getCount(str) {
    var vowelsCount = 0;
    const vowels = ["a", "e", "i", "o", "u"]
    let string = str.toLowerCase()
    console.log(string)
    for(let i =0;i<string.length;i++){
        if(vowels.includes(string[i])){
            vowelsCount++
        }
    }
    
    console.log(vowelsCount) ;
  }

  function lastDigit(n, d) {
    // n is the integers we get
    // d is which digits to return in that integer list
    let digits = (""+n).split('')
   console.log( d<digits.length ? digits.slice(Math.abs(digits.length-d)).map(Number):digits.slice(Math.abs(0,digits.length-d)).map(Number))
   
  }
 


  function movie(card, ticket, perc) {
      // system A is just the ticket price * the count of times a person went 
      // system B starts with card price + ticket price and every time they go ticket price is chepend buy perc
    let count=1
    let systemA = 0
    let newtick = ticket
    let systemB = card
    // console.log(systemB)
    while(systemA<=systemB){
        
      systemA = ticket *count
      console.log(systemA)
      newtick = newtick *perc
      systemB = systemB + newtick
      console.log(Math.round(systemB))
    //   console.log("this is A"+systemA)
      
    
      count++
      
    }
  console.log(count) 
};



const seven = m => {
    // get last digit of m aka lastdigit and then other remaining digits save
// multiply lastdigit * 2
// subtract lastdigit by remaing numbers
//check if divisible
// if divisible then get the divisble number and how many times we got last digit
// if not divisible try then next last digit repeat steps
// 371 --- 37 & 1-- 37 - 1*2 % 7 ==0
    let count = 0;
    while (m.toString().length > 2) {
      let str = m.toString();
      let x = str.slice(0, -1);
      let y = str.slice(-1);
      m = x - 2 * y;
      count++;
    }
    console.log( [m, count]);
  }

  function reverse(m){
    let s = m.split(' ')
    let reverse = ''
    let newarr =[]
    for(let i = 0;i<s.length;i++){
        if(i %2 !=0){
            
            reverse = s[i].split('').reverse().join('')
            newarr.push(reverse)
            console.log(s)
        }else{
            newarr.push(s[i])
        }
        }
        console.log(newarr.join(' '))
  }
  reverse('one two three four')