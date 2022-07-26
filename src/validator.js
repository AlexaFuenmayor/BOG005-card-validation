const validator = {
  isValid: function (creditCardNumber) {
    let numberFinal = 0;
    let numberPar = 0;
    let b = false;

    for (let n = creditCardNumber.length -1; n >= 0; n--) {
      let cDigit = creditCardNumber.charAt(n);
      numberPar = parseInt(cDigit);

      if (b) {
        if ((numberPar *= 2) > 9) numberPar -= 9;
      }
      numberFinal += numberPar;
      b = !b;
    }
    return numberFinal % 10 == 0;
  }, 
  

  maskify: function (creditCardNumber) {
    let string1 = " ";
    let string2 = " ";
    let valores = " ";

    //   console.log(card.value.length)
    if (creditCardNumber.length >= 4) {
      string1 = creditCardNumber.substring(
        creditCardNumber.length - 4,
        creditCardNumber.length
      );
      string2 = creditCardNumber
        .substring(0, creditCardNumber.length - 4)
        .replace(/\w/g, "#");
      valores = string2 + string1;

      return valores;
    }else{
      return creditCardNumber;
    }
  },
};

export default validator;
