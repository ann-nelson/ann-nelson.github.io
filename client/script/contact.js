document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMessage = document.getElementById('formMessage');

  if (!name || !phone || !email || !message) {
      formMessage.textContent = "Please fill in all required fields.";
      formMessage.className = "error";
      return;
  }

  formMessage.textContent = "Thank you for reaching out! I'll get back to you soon.";
  formMessage.className = "success";

  this.reset();
});

document.getElementById('name').addEventListener('input', function() {
  validateField(this, 'nameError');
});
document.getElementById('phone').addEventListener('input', function() {
  validateField(this, 'phoneError');
});
document.getElementById('email').addEventListener('input', function() {
  validateField(this, 'emailError');
});
document.getElementById('message').addEventListener('input', function() {
  validateField(this, 'messageError');
});

function validateField(input, errorId) {
  const errorMessage = document.getElementById(errorId);
  if (!input.value.trim()) {
      errorMessage.textContent = `${input.name} is required.`;
      errorMessage.className = "error";
  } else {
      errorMessage.textContent = '';
  }
}

const formFields = ['name', 'phone', 'email', 'message'];
formFields.forEach(field => {
  const input = document.getElementById(field);
  const errorElement = document.createElement('span');
  errorElement.id = `${field}Error`;
  input.parentNode.appendChild(errorElement);
});

document.querySelectorAll('input[name="timeline"]').forEach((radio) => {
  radio.addEventListener('change', function() {
      const timelineDiv = document.getElementById('timeline');
      if (this.value === 'yes') {
          timelineDiv.style.display = 'block';
      } else {
          timelineDiv.style.display = 'none';
      }
  });
});
