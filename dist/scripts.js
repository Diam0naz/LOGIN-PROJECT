let btn = document.querySelector("button[type=submit]");
btn.addEventListener("click", (e) => {
  e.preventDefault();

  let isValid = true;
  let fullName = document.querySelector("input[type=text]").value;
  let email = document.querySelector("input[type=email]").value;
  let birthDate = document.querySelector("input[type=date]").value;
  let passWord = document.querySelector("input[type=password]").value;

  if (!fullName || fullName == "") {
    isValid = false;
    let span = document.createElement("span");
    span.style.color = "#ff0000";
    span.style.fontSize = "10px";
    span.style.margin = "0px";
    span.style.padding = "0px";
    span.innerText = "Fullname cannot be empty";
    document.getElementById("name").appendChild(span);
    setTimeout(() => {
      span.remove();
    }, 6000);
  }

  if (!birthDate || birthDate == "") {
    isValid = false;
    let span = document.createElement("span");
    span.style.color = "#ff0000";
    span.style.fontSize = "10px";
    span.style.margin = "0px";
    span.style.padding = "0px";
    span.innerText = "Date Of Birth cannot be empty";
    document.getElementById("dOb").appendChild(span);
    setTimeout(() => {
      span.remove();
    }, 6000);
  }

  if (!email || email == "") {
    isValid = false;
    let span = document.createElement("span");
    span.style.color = "#ff0000";
    span.style.fontSize = "10px";
    span.style.margin = "0px";
    span.style.padding = "0px";
    span.innerText = "Email cannot be empty";
    document.getElementById("email").appendChild(span);
    setTimeout(() => {
      span.remove();
    }, 6000);
  }

  if (!passWord || passWord == "") {
    isValid = false;
    let span = document.createElement("span");
    span.style.color = "#ff0000";
    span.style.fontSize = "10px";
    span.style.margin = "0px";
    span.style.padding = "0px";
    span.style.fontWeight = "200";
    span.innerText = "Password cannot be empty";
    document.getElementById("password").appendChild(span);
    setTimeout(() => {
      span.remove();
    }, 6000);
  } else {
    if (passWord.length < 8) {
      isValid = false;
      let span = document.createElement("span");
      span.style.color = "#ff0000";
      span.style.fontSize = "10px";
      span.style.margin = "0px";
      span.style.padding = "0px";
      span.innerText = "Password cannot be less than 8";
      document.getElementById("password").appendChild(span);
      setTimeout(() => {
        span.remove();
      }, 6000);
    }
  }

  if (isValid) {
    let news = "Registration successful!";
    alert(news);
  } else {
    let warn = "Please fill all fields";
    alert(warn);
    document.querySelector("form").reset();
  }
});

let showPass = document.querySelector("#showPass");
showPass.addEventListener("click", (e) => {
  e.preventDefault();
  let password = document.querySelector("input[name=password]");
  if (password.type == "password") {
    showPass.innerText = "Hide Password";
    password.type = "text";
  } else {
    showPass.innerText = "Show Password";
    password.type = "password";
  }
});

let resetForm = document.querySelector("button[type=reset]");
resetForm.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("form").reset();
});
