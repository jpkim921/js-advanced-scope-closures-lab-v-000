function produceDrivingRange(blockRange){
  return function(startPoint, endPoint){
    let distance = parseInt(endPoint) - parseInt(startPoint);
    let distanceRange = Math.abs(distance)
    let difference = Math.abs(distanceRange - blockRange)
    // console.log(difference)

    if (difference < 0) {
      return `${difference} out of range`
    }

    // "blocks out of range"
    // "within range by 4"
  };
}
