function multiplyBiggerNumByTwo(num1, num2) {
  let bigNum = compareNums(num1, num2, "big");

  return bigNum * 2;
}

function divideBiggerNumByThree(num1, num2) {
  let bigNum = compareNums(num1, num2, "big");

  return bigNum / 3;
}

function eatMostTacos(sum1, sum2) {
  let bigNum = compareNums(sum1, sum2, "big");

    return `I ate ${bigNum} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  let smallDog = compareNums(weight1, weight2, "small");

    return `I adopted a dog that weighs ${smallDog} pounds.`;
}

function compareNums(num1, num2, bigOrSmall){
  let bigNum;
  let smallNum;

  if (num1 > num2){
    bigNum = num1;
    smallNum = num2;
  } else {
    bigNum = num2;
    smallNum = num1;
  }

  if (bigOrSmall === "big"){
    return bigNum;
  } else if (bigOrSmall === "small"){
    return smallNum;
  }

}
/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
