function produceDrivingRange(blockRange){
  return function(startPoint, endPoint){
    let distance = parseInt(endPoint) - parseInt(startPoint);
    let distanceRange = Math.abs(distance)
    let difference = distanceRange - blockRange
    console.log(difference)

    // if (travel < 0) {
    //   return `${}`
    // }

    "blocks out of range"
    "within range by 4"
  };
}
