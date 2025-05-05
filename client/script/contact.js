function validateField(input, errorId) {
  const errorMessage = document.getElementById(errorId);
  //check if input field is empty
  if (!input.value.trim()) {
    //show error message
      errorMessage.textContent = `${input.name} is required.`;
      errorMessage.className = "error";
  } else {
    //clear error message if input valid
      errorMessage.textContent = '';
  }
}

document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();
//get values from each input field
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMessage = document.getElementById('formMessage');
//check if required fields are empty
  if (!name || !phone || !email || !message) {
    //display error message
      formMessage.textContent = "Please fill in all required fields.";
      formMessage.className = "error";
      return;
  }
//show success message if all fields are filled
  formMessage.textContent = "Thank you for reaching out! I'll get back to you soon.";
  formMessage.className = "success";
//reset form after successful submission
  this.reset();
});
//add real time validation for input fields
document.getElementById('name').addEventListener('input', (function() {
  validateField(this, 'nameError');
}));
document.getElementById('phone').addEventListener('input', (function() {
  validateField(this, 'phoneError');
}));
document.getElementById('email').addEventListener('input', (function() {
  validateField(this, 'emailError');
}));
document.getElementById('message').addEventListener('input', (function() {
  validateField(this, 'messageError');
}));
//dynamicallt create error elements for each field
const formFields = ['name', 'phone', 'email', 'message'];
formFields.forEach(function(field) {
  const input = document.getElementById(field);
  //span element to show error message
  const errorElement = document.createElement('span');
  errorElement.id = `${field}Error`;
  //append error to input parent node
  input.parentNode.appendChild(errorElement);
});
//handle display of timeline options based on radio btn selection
document.querySelectorAll('input[name="timeline"]').forEach(function(radio) {
  radio.addEventListener('change', function() {
      const timelineDiv = document.getElementById('timeline');
      //show timelineDiv
      if (this.value === 'yes') {
          timelineDiv.style.display = 'block';
      } else {
          timelineDiv.style.display = 'block';
      }
  });
});
