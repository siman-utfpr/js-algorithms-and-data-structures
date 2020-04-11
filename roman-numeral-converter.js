function convertToRoman(num) {
  let conversions = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M"
  };
  let romanNumber = "";
  let numArray = String(num).split("").reverse();
  let convertedNumber = "";
  for(let i = 0; i < numArray.length; i++){  
    switch(numArray[i]){
      case '1':
        convertedNumber = conversions[1 * Math.pow(10, i)];
        break;
      case '2':
        convertedNumber = conversions[1 * Math.pow(10, i)] + conversions[1 * Math.pow(10, i)];
        break;
      case '3':
        convertedNumber = conversions[1 * Math.pow(10, i)] 
        + conversions[1 * Math.pow(10, i)] + conversions[1 * Math.pow(10, i)];
        break;
      case '4':
        convertedNumber = conversions[1 * Math.pow(10, i)] + conversions[5 * Math.pow(10, i)];
        break;
      case '5':
        convertedNumber = conversions[5 * Math.pow(10, i)];
        break;
      case '6':
        convertedNumber = conversions[5 * Math.pow(10, i)] + conversions[1 * Math.pow(10, i)];
        break;
      case '7':
        convertedNumber = conversions[5 * Math.pow(10, i)] 
        + conversions[1 * Math.pow(10, i)] + conversions[1 * Math.pow(10, i)];
        break;
      case '8':
        convertedNumber = conversions[5 * Math.pow(10, i)] 
        + conversions[1 * Math.pow(10, i)] 
        + conversions[1 * Math.pow(10, i)]
        + conversions[1 * Math.pow(10, i)];
        break;
      case '9':
        convertedNumber = conversions[1 * Math.pow(10, i)] + conversions[10 * Math.pow(10, i)];
        break;
      default: 
        convertedNumber = "";
        break;
    }
    romanNumber = convertedNumber.concat(romanNumber);
  }
  console.log(romanNumber);
 return romanNumber;
}

convertToRoman(1023);
