function countDrops(buildingHeight = 200, numEggs = 3, maxSafeFloor, knownMaxSafeFloor = 0, knownMinUnsafeFloor = buildingHeight + 1) {
  if (numEggs < 2) {
    return maxSafeFloor - knownMaxSafeFloor;
  }
  // Try to divide the problem space
  let floorToTry = Math.ceil((knownMaxSafeFloor + knownMinUnsafeFloor) / numEggs);
  if (floorToTry < maxSafeFloor) {
    return countDrops(buildingHeight, numEggs - 1, maxSafeFloor, floorToTry, knownMinUnsafeFloor);
  } else {
    return countDrops(buildingHeight, numEggs - 1, maxSafeFloor, knownMaxSafeFloor, floorToTry);
  }
}

const MAX_BUILDING_HEIGHT = 200;
const MAX_NUM_EGGS = 3;

let worst = 0;

for (let buildingHeight = 0; buildingHeight <= MAX_BUILDING_HEIGHT; ++buildingHeight) {
  console.log(`buildingHeight -> ${buildingHeight}`);
  for (let maxSafeFloor = 1; maxSafeFloor <= buildingHeight; ++maxSafeFloor) {
    console.log(`maxSafeFloor -> ${maxSafeFloor}`);
    for (let numEggs = 3; numEggs <= MAX_NUM_EGGS; ++numEggs) {
      console.log(`numEggs -> ${numEggs}`);
      const result = countDrops(buildingHeight, numEggs, maxSafeFloor);
      console.log(`countDrops -> ${result}`);
      if (result > worst) {
        worst = result;
      }
    }
  }
}

console.log(`worst -> ${worst}`);