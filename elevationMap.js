function elevationMap(input) {
  let amtOfWater = 0;
  let heights = input.length;
  //Potential height of water that could be trapped from both directions
  let leftMaxElev = [];
  let rightMaxElev = [];

  //initialize first value for leftMaxElev
  //and last value for rightMaxElev
  leftMaxElev[0] = input[0];
  rightMaxElev[heights - 1] = input[heights - 1];

  //For each elevation value
  //Find the potential amount of water that could be trapped from Left to Right
  for (let i = 1; i < heights; i++) {
    leftMaxElev[i] = Math.max(leftMaxElev[i - 1], input[i]);
  }
  //For each elevation value
  //Find the potential amount of water that could be trapped from Right to Left
  for (let j = heights - 2; j >= 0; j--) {
    rightMaxElev[j] = Math.max(rightMaxElev[j + 1], input[j]);
  }

  //for each elevation value
  //find the smaller elevation between leftMaxElev and rightMaxElev
  //subtract the current elevation value from smaller elevation height
  for (let i = 1; i < heights - 1; i++) {
    amtOfWater += Math.min((leftMaxElev[i], rightMaxElev[i])) - input[i];
  }
  return amtOfWater;
}

let input = [1, 0, 2, 0, 0, 0, 0, 2];
elevationMap(input);
