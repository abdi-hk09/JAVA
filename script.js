document.getElementById('validationForm').addEventListener('submit', function (event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const password = document.getElementById('password').value;

  const fullNameValid = validateFullName(fullName);
  const emailValid = validateEmail(email);
  const phoneValid = validatePhone(phone);
  const passwordValid = validatePassword(password);

  if (fullNameValid && emailValid && phoneValid && passwordValid) {
      document.getElementById('successMessage').textContent = 'Form submitted successfully!';
      document.getElementById('successMessage').style.color = 'green';
  } else {
      document.getElementById('successMessage').textContent = '';
  }
}

function validateFullName(fullName) {
  const regex = /^[A-Za-z\s]+$/;
  if (!regex.test(fullName)) {
      document.getElementById('fullNameError').textContent = 'Full Name must contain only alphabetic characters and spaces.';
      document.getElementById('fullName').style.border = '1px solid red';
      return false;
  } else {
      document.getElementById('fullNameError').textContent = '';
      document.getElementById('fullName').style.border = '';
      return true;
  }
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email address.';
      document.getElementById('email').style.border = '1px solid red';
      return false;
  } else {
      document.getElementById('emailError').textContent = '';
      document.getElementById('email').style.border = '';
      return true;
  }
}

function validatePhone(phone) {
  const regex = /^\d{10,15}$/;
  if (!regex.test(phone)) {
      document.getElementById('phoneError').textContent = 'Phone number must contain 10-15 digits.';
      document.getElementById('phone').style.border = '1px solid red';
      return false;
  } else {
      document.getElementById('phoneError').textContent = '';
      document.getElementById('phone').style.border = '';
      return true;
  }
}

function validatePassword(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if (!regex.test(password)) {
      document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long, including one uppercase letter, one lowercase letter, and one number.';
      document.getElementById('password').style.border = '1px solid red';
      return false;
  } else {
      document.getElementById('passwordError').textContent = '';
      document.getElementById('password').style.border = '';
      return true;
  }
}

// Real-time validation
document.getElementById('fullName').addEventListener('input', function () {
  validateFullName(this.value);
});

document.getElementById('email').addEventListener('input', function () {
  validateEmail(this.value);
});

document.getElementById('phone').addEventListener('input', function () {
  validatePhone(this.value);
});

document.getElementById('password').addEventListener('input', function () {
  validatePassword(this.value);
});