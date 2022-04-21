const nemo=['nemo']
function findNemo(array){ // Big O number of loops occuring based on input increases how manu times it loops 
    let t0=performance.now()
    for(let i =0;i<array.length;i++){
        if(array[i]==='nemo'){
            console.log('j')
        }
    }
    let t1 =performance.now()
    console.log(t1-t0)
}
// findNemo(nemo)//O(n)--> linear time if array length is 1 then one loop lenght is 100 then loop is 100 operations

//big O as we increase inouts how does that affect operations/aka number of things that occur

//if two loops but with different arrays then it wouldnt be o(2n) because each array could have diiferent value of inputs so
// it would be o(a+b) two diffent loops with different arrays 

function logPairs(array){
for(let i =0;i<array.length;i++){
    for(let j=0;j<array.length;j++){
        console.log(""+array[i]+array[j])
    }
  
}
}

function commonItems(x,y){
//    console.log( x.includes(...y))
for(let i =0;i<x.length;i++){   /// nested and two different rrays so O(a*b) not O(n^2) since its two arrays
    for(let j=0;j<y.length;j++){
        if(x[i] ==y[j]){
            console.log(true)
       
    }
    
}

}
console.log(false)  
}
// commonItems(['x','b'],['x','y'])

function cont(arr1){
    let obj = {

    }
    for(let i =0;i<arr1.length;i++){
        obj[arr1[i]]=true
       
    }
    return obj
    
   
}

function two(arr2){
    let obj = cont(['x','b'])

    for(let j =0;j<arr2.length;j++){
        if(obj.hasOwnProperty(arr2[j])){
            console.log(true)
        }else{
            console.log(false)
        }
    }
  
}
// two(['c','y'])

function comopl(arr1,sum){
    let obj = {}
    for(let i = 0;i<arr1.length;i++){
        if(obj.hasOwnProperty(arr1[i])){
            console.log(true)
        }else{
            obj[sum-arr1[i]]=true
        }
    }
    console.log(obj)
}
function te(){
    let rex =nesSum([1,4,5,1],8)
    console.log(rex)
}

function nesSum(arr1,sum){
    for(let i =0;i<arr1.length;i++){
      for(let j =i+1;j<arr1.length;j++){
        if(arr1[i] +arr1[j]==sum){
          return true
        }
      }
      
    }
   return false
  }
  

  const rev=()=>{
      let str = 'Cars at home'
      let newa=[]
      str=str.split('')
      for(let i =0;i<str.length;i++){
        newa.unshift(str[i])
        //   str[i]=str[]
        //   console.log(str)
      }
      console.log(newa.join(''))
    }
    
     const mergeSortedArrays=(arr1, arr2 )=>{
        let arr=[...arr1,...arr2].sort(function(a,b){
            return a-b
        })
        console.log(arr)
    }
   

class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }
  set(key,value){
      let address = this._hash(key)
      if(!this.data[address]){
          this.data[address] = []
      }
        this.data[address].push([key,value])
  }
  get(key){
    let address = this._hash(key)
    const currentBucket = this.data[address]
    if (currentBucket){
for(let i = 0;i<currentBucket.length;i++){
    if(currentBucket[i][0] === key){
        console.log(currentBucket[i][1]) 
    }
}
    }
    return undefined
        
      }
  keys(){
      const keysArray = []
      for(let i=0;i<this.data.length;i++){//loop through all 50 shelves made in Hashtable class
          if(this.data[i]){
              console.log(this.data[i],i)
            keysArray.push(this.data[i][0][0])
          }
          
      }
      console.log(keysArray)
  }
  }
  


// const myHashTable = new HashTable(50);
// myHashTable.set('grapes', 10000)
// myHashTable.get('grapes')
// myHashTable.set('apples', 9)
// myHashTable.get('apples')
// myHashTable.keys()


//given an array 
// return which number shows up a second time but first
// store array elements as keys in object and when the same value is seen value goes up by one first ele with 2 as value is returned

function findRecu(arr){
    let count =1
    let obj ={}
    for(let i =0;i<arr.length;i++){
        if (obj.hasOwnProperty(arr[i])){
            count++
            obj[arr[i]]=count
            if(obj[arr[i]]== 2){
                return arr[i]
                break
            }
        }else{
            obj[arr[i]]=count
        }
    }
    return undefined
}
let res =findRecu([1])
console.log(res)