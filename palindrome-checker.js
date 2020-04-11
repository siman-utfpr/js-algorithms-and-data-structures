function palindrome(str) {
  let regex = /\W|_/g;
  let usefulString = str.replace(regex, "").toLowerCase();
  for(let i = 0; i < usefulString.length; i++){
    if(usefulString[i] != usefulString[usefulString.length - 1 - i]){
      return false;
    }
  }
  
  return true;
}



palindrome("0_0 (: /-\ :) 0-0");
