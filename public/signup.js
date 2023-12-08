function processForm(event) {
    event.preventDefault();
  
    // Get form input values
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Message:', message);
  }
  
  const signupForm = document.querySelector('.form-signup');
  signupForm.addEventListener('submit', processForm);