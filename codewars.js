console.log("hello");
/* When you check if they are ready their answers are in a dictionary and will either be: aye or nay */
/* const cannonsReady = (gunners) => {
    let values = Object.values(gunners)
    let count = 0
    console.log(values)
      for(let i = 0;i<values.length;i++){
        if(values[i] == 'aye'){
          count++
        }else{
          continue
        }
        
      }
      if(count == values.length){
        return 'Fire!'
      }else{
        return 'Shiver me timbers!'
      }
    } */
    /* shorter code then above, lessen time complexity  */
    const cannonsReady = (gunners) => {
        let values = Object.values(gunners)
        let words = values.filter(word => word == 'aye')
       return (words.length == values.length ? 'Fire!':'Shiver me timbers!')
      }

      function cannons(gunners){
        for(var i in gunners){
            console.log(i)
        }
      }cannons({'mike':'aye','john':'aye'})

      function remove (string) {  
        for(let i =0;i<string.length;i++){
          if(string[string.length-1]=='!'){
            string = string.slice(0,-1)
          }else{
            return string
          }
        }
          return string
        }
        remove('Hi!!')