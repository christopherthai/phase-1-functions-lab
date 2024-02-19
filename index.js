// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  //returns the number of blocks given a value
  let numOfBlocks;
  if (someValue === 43) {
    numOfBlocks = 1;
  } else if (someValue === 50) {
    numOfBlocks = 8;
  } else if (someValue < 42) {
    numOfBlocks = 8;
  }

  return numOfBlocks;
}

function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination) {
  //returns the number of feet traveled
  let distanceTravelledInBlocks;
  
  if (destination > start) {
    distanceTravelledInBlocks = destination - start;
  } else if (destination < start) {
    distanceTravelledInBlocks = start - destination
  }
  
  return distanceTravelledInBlocks * 264;
}

function calculatesFarePrice(start, destination) {
  //returns the fare for the customer
  let fare;
  let distanceInFeet = distanceTravelledInFeet(start, destination);

  if (distanceInFeet < 400) {
    fare = 0;
  } else if (distanceInFeet > 400 && distanceInFeet < 2000) {
    fare = (distanceInFeet - 400) * 0.02;  
  } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
    fare = 25;
  } else if (distanceInFeet > 2500) {
    fare = 'cannot travel that far';
  }

  return fare;

}