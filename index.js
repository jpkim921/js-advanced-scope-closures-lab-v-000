function produceDrivingRange(blockRange){
  return function(startPoint, endPoint){
    let distance = parseInt(endPoint) - parseInt(startPoint);
    let distanceRange = Math.abs(distance)
    let travel = distanceRange - blockRange
    console.log(travel)

    // if (travel < 0) {
    //   return `${}`
    // }

    "blocks out of range"
    "within range by 4"
  };
}
