document.getElementById('artContactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');

    if (!name || !email || !message) {
      formMessage.textContent = "Please fill in all required fields.";
      formMessage.className = "error";
      return;
    }

    formMessage.textContent = "Thank you for reaching out! I'll get back to you soon.";
    formMessage.className = "success";

    this.reset();
  });