console.log("hello");
/* working with regex */
function shortcut (string) {
    let word = string.replace(/[aeiou]/g,'')
    return word
  }

  
  /* You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters. */

  function getMiddle(s)
{
 // get length of s if even the middle two is half and plus 1
  //if odd then add 1 to length and divde by 2 and add 1 will give 
  //Code goes here!
  let char = ""
  let x = ''
  let y =''
  let len = s.length/2
  let lenodd = s.length+1
    if(s.length %2 == 0){
      x = s[len]
      y =s[len-1]
     char = y+x
  }else{
    x = s[(lenodd/2)-1]
    char = x
  }
  return char
}

function practiceslice(){
    let s = 'testg'
    console.log(s.slice(1.5,3))
}
practiceslice()

  function decode(string) {
    let decodedString = ''
   let decodeone={0:5,
             1:9,
             2:8,
             3:7,
             4:6
             }
    
    for(let i =0;i<string.length;i++){
        for(const [key,value] of Object.entries(decodeone)){
            if(string[i] == key){
                decodedString += value
                // console.log(decodedString)
            }else if(string[i] == value){
                decodedString+=key
                // console.log(decodedString)
            }else{
                continue
            }
        }
    }
 return decodedString
  }
  

  const decode = s => s.replace(/./g, c => '5987604321'[c]);
  const decode = string => [...string].map($ => '5987604321'[$]).join('')

  /* linked list length */
  function length(head) {
    this.head = head
    let count = 0
    if(head == null){
      return count
    }
    while (head != null) {
                if (count == head.data)
                    return head.data;
                count++;
                head = head.next;
            }
    
      return count;
        }