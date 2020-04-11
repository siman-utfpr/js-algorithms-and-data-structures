function telephoneCheck(str) {
  let regexPhone = /^1?\s?(\d{3}|\(\d{3}\))(\s|-)?\d{3}(\s|-)?\d{4}$/;
  return regexPhone.test(str);
}

telephoneCheck("555-555-5555");
