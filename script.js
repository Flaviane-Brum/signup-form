const Form = {
  formSubmit: document.querySelector("form"),
  firstName: document.querySelector("input#firstName"),
  lastName: document.querySelector("input#lastName"),
  emailAddres: document.querySelector("input#emailAddres"),
  password: document.querySelector("input#password"),
  firstNameSmall: document.getElementById("firstNameSmall"),
  lastNameSmall: document.getElementById("lastNameSmall"),
  emailAddresSmall: document.getElementById("emailAddresSmall"),
  paswordSmall: document.getElementById("paswordSmall"),
  nameDiv: document.querySelector("form .nameDiv"),
  lastNameDiv: document.querySelector("form .lastNameDiv"),
  emailDiv: document.querySelector("form .emailDiv"),
  passwordDiv: document.querySelector("form .passwordDiv"),
  inputs: document.querySelectorAll("form input"),

  getValues() {
    return {
      name: Form.firstName.value,
      lastName: Form.lastName.value,
      emailAddres: Form.emailAddres.value,
      password: Form.password.value,
    };
  },
  validate() {
    const { name, lastName, password, emailAddres } = Form.getValues();

    if (name.length === 0) {
      Form.nameDiv.classList.add("active");
      Form.firstNameSmall.innerHTML = `first name cannot be empty`;
      Form.firstName.classList.add("active");
    } else {
      Form.firstNameSmall.innerHTML = ``;
      Form.nameDiv.classList.remove("active");
      Form.firstName.classList.remove("active");
    }
    if (lastName.length === 0) {
      Form.lastNameDiv.classList.add("active");
      Form.lastName.classList.add("active");
      Form.lastNameSmall.innerHTML = `last name cannot be empty`;
    } else {
      Form.lastNameSmall.innerHTML = ``;
      Form.lastNameDiv.classList.remove("active");
      Form.lastName.classList.remove("active");
    }
    if (password.length === 0) {
      Form.paswordSmall.innerHTML = `password cannot be empty`;
      Form.passwordDiv.classList.add("active");
      Form.password.classList.add("active");
    } else {
      Form.paswordSmall.innerHTML = ``;
      Form.passwordDiv.classList.remove("active");
      Form.password.classList.remove("active");
    }
    if (emailAddres.length === 0) {
      Form.emailAddresSmall.innerHTML = `looks like this is not an email`;
      Form.emailDiv.classList.add("active");
      Form.emailAddres.classList.add("active");
    } else {
      Form.emailAddresSmall.innerHTML = ``;
      Form.emailDiv.classList.remove("active");
      Form.emailAddres.classList.remove("active");
    }
  },

  handleSubmit(e) {
    e.preventDefault();
    try {
      Form.validate();
    } catch (error) {
      console.log(error);
    }
  },
};

Form.formSubmit.addEventListener("submit", Form.handleSubmit);
