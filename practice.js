console.log("hello");

function nbYear(p0, percent, aug, p) {
    let years = 0
    let per = parseFloat(percent)/100
    let newP0 = p0
    //calculate all numbers over and over until po is >= p
      // your code
    while(newP0<p){

      newP0 = newP0+(newP0*per)+aug
      console.log(newP0)
      years++
    }
  
    return years
  }
  nbYear(1500, 5, 100, 5000)

