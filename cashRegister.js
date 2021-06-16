function checkCashRegister(price, cash, cid) {
    const numbers = cid;
    const totalAmount = cid.reduce((x,y) => x + y[1],0);
    var finalArr = [];
    var change = {
      "PENNY": 0.01,
      "NICKEL": 0.05,
      "DIME": .1,
      "QUARTER": .25,
      "ONE": 1,
      "FIVE": 5,
      "TEN": 10,
      "TWENTY": 20,
      "ONE HUNDRED": 100
    };
    const due = Math.abs(cash-price);
    var amount = Math.abs(cash - price);
    cid = [...cid.map(function(x) {
      return [x[0], parseInt(x[1] / change[x[0]])];
    })].reverse();
    var something = 0;
    console.log(...cid.map(function(x) {
      if (x[1] !== 0 && amount - change[x[0]] > 0) {
        var quantity = [x[0],0];
        while (something + change[x[0]] <= amount && x[1] !== 0) {
          something += change[x[0]];
          quantity[1] += change[x[0]];
          x[1]--;
        }
        finalArr.push(quantity);
        return x;
      }
    }))
    finalArr = finalArr.filter(x => x[1] !== 0);
    finalArr = finalArr.map(x => x[0] == "PENNY" ? [x[0],Number.parseFloat(x[1] += 0.01).toFixed(2)]: [x[0],x[1]]);
    const totalChange = finalArr.reduce((x,y) => x + parseFloat(y[1]),0);
    if (totalChange.toFixed(2) == due && totalAmount == totalChange) {
      return {status: "CLOSED",change: numbers}
    } else if (totalChange.toFixed(2) != due) {
      return {status: "INSUFFICIENT_FUNDS",change: []}
    } else {
      return {status: "OPEN",change: finalArr.map(x => [x[0],parseFloat(x[1])])};
    }
  }
  console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));