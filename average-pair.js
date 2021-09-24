// add whatever parameters you deem necessary
function averagePair(nums, targetAvg) {
  i = 0;
  j = nums.length - 1;
  while (i < j) {
    let avg = nums[i] + nums[j] / 2;
    if (avg === targetAvg) {
      return true;
    } else if (avg < targetAvg) {
      i++;
    } else {
      j++;
    }
  }
  return false;
}
