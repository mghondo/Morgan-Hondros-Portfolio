var name = document.querySelector("#name");
var email = document.querySelector("#email");
var phone = document.querySelector("#phone");
var message = document.querySelector("#message");
var sentMsg = document.querySelector("#sent-message");
var nameValid = document.querySelector("#name-valid");
var emailValid = document.querySelector("#email-valid");
var phoneValid = document.querySelector("#phone-valid");
var messageValid = document.querySelector("#message-valid");

var submitBtn = document.querySelector("#submitContact");

// submitBtn.addEventListener("click", insertData);

// Detect auth state
function insertData() {
  // e.preventDefault();
  set(ref(db, "ReachOuts/" + name.value), {
    Name: name.value,
    Email: email.value,
    Phone: phone.value,
    Message: message.value,
  })
    .then(() => {
      sentMsg.innerHTML =
        "Thanks for sending your info!! I'll get back to you.";
    })
    .catch((error) => {
      errorMsg.innerHTML =
        "Something went wrong. Make sure you put an actual email, and actual phone number, etc.";
    });
}

function fillStuffIn(name, email, phone, message) {
  var steps = 0;
  if (name == "") {
    // console.log("Name must be filled out");
    nameValid.innerHTML = "Name must be filled out";
  } else {
    steps += 1;
  }
  if (email == "") {
    // console.log("Email must be filled out.");
    emailValid.innerHTML = "Email must be filled out.";
  } else {
    steps += 1;
  }

  if (phone == "") {
    // console.log("Phone must be filled out.");
    phoneValid.innerHTML =
      "Phone must be filled out. We'll handle symbols and characters:)";
  } else {
    steps += 1;
  }
  if (message == "") {
    // console.log("Fill in a message.");
    messageValid.innerHTML = "Just fill in something!";
  } else {
    steps += 1;
  }
  if (steps == 4) {
    return true;
  } else {
    return false;
  }
}

function emailTrueFalse(email) {
  return /\S+@\S+\.\S+/.test(email);
}

function emailValidate(email) {
  if (/\S+@\S+\.\S+/.test(email) == false) {
    console.log("invalid email");
    emailValid.innerHTML = "Invalid Email.";
  } else {
    return email;
  }
}

function phoneTrueFalse(phone) {
  if (!hasNumber(parseNum)) {
    return false;
  } else {
    return true;
  }
}

function phoneValidate(num) {
  var parseNum = phoneParse(num);
  if (!hasNumber(parseNum)) {
    phoneValid.innerHTML = "Invalid Number";
  } else {
    return parseNum;
  }
}

function phoneParse(number) {
  var phoneActual = number.replace(/[^\d]/g, "");
  return phoneActual;
}

function hasNumber(myString) {
  return /\d/.test(myString);
}

function totalFingValidation(name, email, phone, message) {
  var newEmail = emailIsValid(email);
  var newPhone = phoneValidate(phone);

  //   Validating email
  if (
    fillStuffIn != false &&
    emailTrueFalse != false &&
    phoneTrueFalse != false
  ) {
    insertData();
  }
}
