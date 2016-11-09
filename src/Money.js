class Money {
  static toServerCurrencyFormat(amount) {
    const decimalPlace = amount.indexOf(".");
    if(decimalPlace === -1) {
      return Number(amount) * 100;
    } else {
      const after = amount.substring(decimalPlace + 1);
      if(after.length === 1) {
        amount += "0";
      }

      return Number(amount.replace(".", ""))
    }
  }

  static toDisplayFormat(amount) {
    const pence = Number(amount);
    let value = "£" + String(pence / 100);

    if(pence % 100 !== 0 && pence % 10 === 0) {
      value += "0";
    }

    return value;
  }
}

export default Money;
