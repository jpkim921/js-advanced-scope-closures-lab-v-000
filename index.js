function produceDrivingRange(blockRange){
  return function(startPoint, endPoint){
    let distance = Math.abs(parseInt(endPoint) - parseInt(startPoint));

    let difference = distance - blockRange
    // console.log(difference)

    if (difference > 0) {
      return `${difference} blocks out of range`
    }

  };
}
