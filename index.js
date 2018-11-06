function produceDrivingRange(blockRange){
  return function(startPoint, endPoint){
    let distance = parseInt(endPoint) - parseInt(startPoint);
    let range = Math.abs(distance)
    console.log(blockRange)
    console.log(range)
    console.log(startPoint, endPoint)

    "blocks out of range"
    "within range by 4"
  };
}
