function emailIsValid(email) {
  return /\S+@\S+\.\S+/.test(email);
}

function phoneValidate(num) {
  var parseNum = phoneParse(num);
  if (!hasNumber(parseNum)) {
    console.log("Invalid Number");
  } else {
    console.log("yay: " + parseNum);
  }
}

function phoneParse(number) {
  var phoneActual = number.replace(/[^\d]/g, "");
  return phoneActual;
}

function hasNumber(myString) {
  return /\d/.test(myString);
}
