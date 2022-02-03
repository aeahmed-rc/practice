console.log("hello");

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