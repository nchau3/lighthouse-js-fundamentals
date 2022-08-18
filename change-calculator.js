const calculateChange = function(total, cash) {
  let totalChange = cash - total;
  let exactChange = {
    twentyDollar: 0,
    tenDollar: 0,
    fiveDollar: 0,
    twoDollar: 0,
    oneDollar: 0,
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0
  }
  //add number of bills to object, subtract from total
  while (totalChange > 1) {
    if (totalChange % 2000 != totalChange) {
      exactChange.twentyDollar = Math.floor(totalChange / 2000);
      totalChange = totalChange - (exactChange.twentyDollar * 2000);
    } else if (totalChange % 1000 != totalChange) {
      exactChange.tenDollar = Math.floor(totalChange / 1000);
      totalChange = totalChange - (exactChange.tenDollar * 1000);
    } else if (totalChange % 500 != totalChange) {
      exactChange.fiveDollar = Math.floor(totalChange / 500);
      totalChange = totalChange - (exactChange.fiveDollar * 500);
    } else if (totalChange % 200 != totalChange) {
      exactChange.twoDollar = Math.floor(totalChange / 200);
      totalChange = totalChange - (exactChange.twoDollar * 200);
    } else if (totalChange % 100 != totalChange) {
      exactChange.oneDollar = Math.floor(totalChange / 100);
      totalChange = totalChange - (exactChange.oneDollar * 100);
    } else if (totalChange % 25 != totalChange) {
      exactChange.quarter = Math.floor(totalChange / 25);
      totalChange = totalChange - (exactChange.quarter * 25);
    } else if (totalChange % 10 != totalChange) {
      exactChange.dime = Math.floor(totalChange / 10);
      totalChange = totalChange - (exactChange.dime * 10);
    } else if (totalChange % 5 != totalChange) {
      exactChange.nickel = Math.floor(totalChange / 5);
      totalChange = totalChange - (exactChange.nickel * 5);
    } else {
      exactChange.penny = totalChange;
      break;
    }
  }
  //delete any zero value properties
  for (let i = 0; i < 10; i++) {
    if (exactChange.twentyDollar === 0) {
      delete exactChange.twentyDollar;
    } else if (exactChange.tenDollar === 0) {
      delete exactChange.tenDollar;
    } else if (exactChange.fiveDollar === 0) {
      delete exactChange.fiveDollar;
    } else if (exactChange.twoDollar === 0) {
      delete exactChange.twoDollar;
    } else if (exactChange.oneDollar === 0) {
      delete exactChange.oneDollar;
    } else if (exactChange.quarter === 0) {
      delete exactChange.quarter;
    } else if (exactChange.dime === 0) {
      delete exactChange.dime;
    } else if (exactChange.nickel === 0) {
      delete exactChange.nickel;
    } else if (exactChange.penny === 0) {
      delete exactChange.penny;
    }
  } return exactChange;
}

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));