function checkCashRegister(price, cash, cid) {
  let insufficientObj = {status: "INSUFFICIENT_FUNDS", change: []};
  let change = cash - price;
  if(getTotalCid(cid) < change){
    return insufficientObj;
  }else if(getTotalCid(cid) == change){
    return {
      status: "CLOSED",
      change: cid
    }
  } else {
    let changeMoney = makeChange(change, cid);
    if(changeMoney === false) return insufficientObj;
    return {status: "OPEN", change: changeMoney};
  }
}

function getTotalCid(cid){
  let total  = 0;
  for(let i = 0; i < cid.length; i++){
    total += cid[i][1];
  }
  return total;
}

function makeChange(change, cid){
  let currencyValues = getCurrencyValues();
  let finalChange = [];
  for(let i = currencyValues.length - 1; i >= 0; i--){
    let currency = currencyValues[i];
    console.log(change);
    let necessaryAmountOfBills = parseInt(change / currency[1]);
    console.log(necessaryAmountOfBills)
    if(necessaryAmountOfBills > 0){
      let necessaryValue = necessaryAmountOfBills *currency[1];
      /* If the change couldn't be made with the maximum amount  
        of each bill, it would fail. (Ex: needs $80 but has only
        3 $20 bills, the return would be false even if 
        the remaining money on the register could cover it)
      */
      while(cid[i][1] < necessaryValue){
        necessaryValue -= currency[1];
        if(necessaryValue == 0) return false;
      }
      change -= necessaryValue;
      // Damn floating point precision error
      change = change.toPrecision(6);
      finalChange.push([currency[0], necessaryValue]);
    }
  }
  return finalChange;
}


function getCurrencyValues(){
  return [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["HUNDRED", 100]
  ]
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
