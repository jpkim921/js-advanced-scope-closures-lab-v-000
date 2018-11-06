function produceDrivingRange(blockRange){
  return function(startPoint, endPoint){
    let distance = Math.abs(parseInt(endPoint) - parseInt(startPoint));
    let difference = distance - blockRange;

    if (difference > 0) {
      return `${difference} blocks out of range`
    } else {
      return `within range by ${Math.abs(difference)}`
    }
  };
}

function produceTipCalculator(percent) {
  return function(cost) {
    return cost * percent
  }
}
