const currencyUnit = {
    "PENNY": 1,
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000
  }
  function checkCashRegister(price, cash, cid) {
    let changeTotal = Math.abs(cash*100 - price*100);
    let change = [];
    let changeSum = Math.abs(cash*100 - price*100);
    let filteredcid = cid.filter(x => x[1] !== 0).reverse();
    let totalcid = 0;
    filteredcid.forEach(function(x) {
      let totalCoins = x[1]*100;
      let curr = x[0];
      totalcid += x[1]*100;
      let amount = 0;
      while (changeSum >= currencyUnit[curr] && totalCoins !== 0) {
        amount += currencyUnit[curr];
        changeSum -= currencyUnit[curr];
        totalCoins -= currencyUnit[curr];
      }
      if (amount !== 0) {
        console.log(amount / 100, changeSum);
        change.push([x[0],amount / 100]);
      }
    })
    let status = "";
    if (totalcid == changeTotal && changeSum == 0) {
      status = "CLOSED";
      change = cid;
    } else if (changeSum !== 0) {
      status = "INSUFFICIENT_FUNDS";
      change = [];
    } else {
      status = "OPEN";
    }
    return {"status": status, "change": change};
  }
  
  console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));