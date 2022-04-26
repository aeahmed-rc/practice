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
    let obj ={}
    for(let i =0;i<arr.length;i++){
        if(obj[arr[i]] == true){
            return arr[i]
        }else{
            obj[arr[i]] =true
        }
        console.log(obj)
    }
    return undefined
}
// let res =findRecu([2,2,3,4,5])
// console.log(res)
/*
given an array 
1) Print the number that repeats the most number of times 
2)  If more than one number matches - output the largest one.
*/
function repLar(arr){
    //input [2,2,2,3,5,5,5]
    //output 5 
    //every time the key is in array increase the value at end return the ones with heighest value and get max
    let map={}
    let r =[]
   
    for(let i =0;i<arr.length;i++){

        if(map[arr[i]]){
            
            map[arr[i]] = map[arr[i]]+1

        }else{
            map[arr[i]] = 1
            
        }

    }
    let k=0
    let v =0
    // { 2:3,3:1,5:3} output 5 because its key and value are heighest
    for (const [key, value] of Object.entries(map)) {
       if(value >= v){
        v = value
        // k =key
           if(key>k){
            k=key
           }
           
          
       }
    }
    console.log(k)
}

//creating lined list
// 10--->5-->30
// this is what it will look like after adding values
// let linkedList ={
//     head:{
//         value:10,
//         next:{
//             value:5,
//             next:{
//                 value:30,
//                 next:null
//             }
//         }
//     }
// }
class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class Linkedlist{
    constructor(value){
        this.head={
            value:value,
            next:null
        }
        this.tail=this.head
        this.length=1
    }
    append(values){
        if(Array.isArray(values)){
           for(let i=0;i<values.length;i++){
            const newNode =new Node(values[i])
            this.tail.next=newNode
            this.tail =newNode
             this.length++
           }

        }else{
            const newNode =new Node(values)
            this.tail.next=newNode
            this.tail =newNode
             this.length++ 
        }
   
     
}
    prepend(value){
        //add where the head is 
    const newNode = new Node(value)
    newNode.next = this.head
    this.head =newNode
    this.length++
    // console.log(newNode.next)
    }
    printList(){
        let arr = []
        let currentNode = this.head
        while(currentNode!=null){
            arr.push(currentNode.value)
            currentNode = currentNode.next
        }
     console.log(arr)
    }
    insert(index,value){
        console.log(index,value)
        if (index === 0) {
            this.prepend(value);
            return this.printList();
          }
          const newNode = new Node(value)
          const leader = this.traversetoIndex(index-1)// find the point before where we will insert
          const holdingPointer = leader.next // holds orignal values so we dont lose them
          leader.next=newNode// adds the new value right next to leader
          newNode.next = holdingPointer
          this.length++
          return this.printList()
    }
    delete(index){

        const leader =this.traversetoIndex(index-1)
        const nodeToBeDeleted = this.traversetoIndex(index+1)

        leader.next = nodeToBeDeleted
        this.length--
        return this.printList()
    }
    traversetoIndex(index){
        //to find the leader go to one before the index wanted 
        let counter =0
        let currentNode = this.head
        while(counter!=index){
            currentNode=currentNode.next
            counter++
        }
        return currentNode
    }

}
const myLinkedList = new Linkedlist(10)
myLinkedList.append(5)
myLinkedList.append([18,4])
myLinkedList.prepend(1)
myLinkedList.insert(2,12)
myLinkedList.delete(2)
// myLinkedList.printList()

