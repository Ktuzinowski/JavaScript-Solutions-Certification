function telephoneCheck(str) {
    let actualStuff = /\(|\)/g;
    let parenthesis = /\(\d{3}\)/g;
    let digits = /\d/g;
    let hyphens = /\-/g;
    let allowable = /[^\d|\(|\)|\s|-]/g;
    if (allowable.test(str)) {
      return false;
    } else if (hyphens.test(str) && str.match(hyphens).length > 2) {
      return false;
    } else if (str.match(digits).length < 10) {
      return false;
    } else if (str[0] != 1 && str.match(digits).length == 11) {
      return false;
    } else if (str.match(digits).length > 11) {
      return false;
    } else if (actualStuff.test(str) && !parenthesis.test(str)) {
      return false;
    }
    return true;
  }
  console.log(telephoneCheck("1 555)555-5555"));
  let regex = /\(\d{3}\)/g;
  let string = "1 555)555-5555";
  let parenthesis = /\(\d{3}\)/g;
  console.log(string.match(parenthesis));
  console.log(parenthesis.test(string));