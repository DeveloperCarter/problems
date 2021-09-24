// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
  const num1Freq = {};
  const num2Freq = {};

  for (let num of num1) {
    num1Freq[num] = ++num1Freq[num] || 1;
  }
  for (let num of num2) {
    num2Freq[num] = ++num2Freq[num] || 1;
  }

  for (let num in num1Freq) {
    if (!num2Freq[num]) return false;
  }
  for (let num in num2Freq) {
    if (!num1Freq[num]) return false;
  }
}
