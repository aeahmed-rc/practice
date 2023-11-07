// Coding challenge 

//// running a class room
// given list of words 
// given a string with random letters
// does the string contain any letters that make up a word from the words array
// splitting string1 into array and checking if all the letters in one of the words are in the string 1

// input (array,string1)

function findString(words,string1){
   // anagram in a way
   // does string1 contain all letters needed for words[i]
    // {c:1,a:1,t:1}
    // now if the letter is in string1 subtract 1 
    // if all values in dict is 0 return words[i]
    // dict[string[i]] -1 
    // if values of dict is 0 return word else return '-'
    let wordsDict ={}
    for(let i =0;i<words.length;i++){
        let splitted = words[i].split('')
        for(let j = 0;j<splitted.length;j++){
            wordsDict[splitted[j]]=words[splitted[j]]+1||1
        }
        for (const c of string1) {
            if(wordsDict[c]){
                wordsDict[c]=wordsDict[c]-1
            }

        }
        console.log(words[i])
        console.log(wordsDict)
        for (var key in wordsDict){
            if(wordsDict[key]==0){
                return words[i]
            }else{
                return '-'
            }
            }
      
    }

    }
 
    console.log(findString(['cat','baby'],'bfufaufbahay'))
    // does ctay have all the letters in words[0]
    // ctay ={c:1,t:1,a:1,y:1}

    