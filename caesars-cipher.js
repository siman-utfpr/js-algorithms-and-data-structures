function rot13(str) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let newString = "";
  for(let i = 0; i < str.length; i++){
    if(alphabet.includes(str[i])){
      let index = alphabet.indexOf(str[i]);
      if(index - 13 >= 0){
        newString += alphabet[index - 13];
      }else {
        newString += alphabet[alphabet.length + index - 13];
      }
    }else {
      newString += str[i];
    }
  }
  return newString;
}

rot13("SERR PBQR PNZC");
