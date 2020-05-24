class MySolution {
  constructor() {
    this.flag = false;
  }

  binarySearch(nums, target) {
    let left = 0, right = nums.length - 1;
    let found = false;
    let middle;
    
    while (!found && left <= right) {
      middle = Math.floor((left + right) / 2);
      
      if (nums[middle] === target) { // Once target found
        found = true;
      } else if (nums[middle] > target){ // Then on the left
        right = middle - 1;
      } else { // Then on the right 
        left = middle + 1;
      }
    }

    return found;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;