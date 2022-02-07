console.log("hello");
/* Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match */
//   function points(games) {
//     console.log(games[1][0])
//     let point = 0
//   for(let i =0;i<games.length;i++){
//     let x = games[i][0]
//     let y = games[i][2]

//     if(x>y){
//       point+=3
//     } else if(x<y){
//       point+=0
//     }else{
//       point+=1
//     }
//   }
//     console.log(point)
//   }
function ex(){
    let symbol = ''
    for(let i =0;i<7;i++){
        symbol = symbol +'#'
        console.log(symbol)
    }
}
ex()
function fizzbuzz(){
    for(let i = 1;i<=100;i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log('fizzbuzz')
        }else if(i % 5 ==0 && i % 3 !=0 ){
            console.log('Buzz')
        }else if(i % 3 ==0 && i % 5 !=0){
            console.log('Fizz')
        }else{
            console.log('Not %'+ i)
        }
    }
}
fizzbuzz()