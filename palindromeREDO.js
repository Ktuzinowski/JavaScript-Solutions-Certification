function palindrome(str) {
    const alphaNumeric = str
      .toLowerCase()
      .match(/[a-z0-9]/g);
    console.log(alphaNumeric.join(''))
    console.log(alphaNumeric.reverse().join(''));
    return alphaNumeric.join('') === alphaNumeric.reverse().join('');
  }
  
  
  
  console.log(palindrome("not a palindrome"));