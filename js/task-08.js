const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", formOn);
function formOn(event) {
  event.preventDefault();

  const formData = {};

  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені!");
  } else {
    formData.email = email.value;
    formData.password = password.value;
    console.log(formData);
    formEl.reset();
  }
}
