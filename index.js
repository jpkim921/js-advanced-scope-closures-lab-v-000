function produceDrivingRange(blockRange){
  return function(startPoint, endPoint){
    let distance = Math.abs(parseInt(endPoint) - parseInt(startPoint));
    console.log(distance)

    let difference = distance - blockRange

  };
}
