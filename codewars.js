console.log("hello");
/* working with regex */

// calcualte slope

function getSlope(p1, p2) {
    // Return the slope of the line through p1 and p2
    // slope is y2-y1/x2-x1
    // ex: [1,1] [2,2]
    //      x1,y1 x2,y2
    // if p1 == p2 then return null
    // if verticle aka if rise/run = ex 2/0 if run is zero

    let slope = (p2[1]-p1[1])/(p2[0]-p1[0])
    if(p2[0] == p1[0] && p2[1] ==p1[1]){
        return null
    }else if(p2[0] == p1[0]){
        return null
    }else {
        return slope
    }
}
  getSlope([1,3],[2,1])


