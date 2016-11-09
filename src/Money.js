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
}

export default Money;
