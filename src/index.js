module.exports = function getZerosCount(number, base) {
let newBase = base;
let zerosCount = number;
for (let i = 2; i <= newBase; i++){
  if (newBase % i == 0){
    let multipliers = 0;
    while (newBase % i == 0){
      multipliers++;
      newBase = Math.floor(newBase / i);
      }
    let varNumber = number;
    let sumMultiplier = 0;
    while (varNumber / i  > 0){
      varNumber = Math.floor(varNumber / i);
      sumMultiplier += varNumber;
      }
    zerosCount = Math.min(zerosCount, Math.floor(sumMultiplier / multipliers));
    }
 }
return zerosCount;
}
