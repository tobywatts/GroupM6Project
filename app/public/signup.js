// Form Verification

function redirectToIndex() {
  window.location.href = 'index.html';
}

function sendEmailToServer() {
  fetch('/send-email', {
      method: 'POST'
  })
  .then(response => {
      if (response.ok) {
          console.log('Email sent!');
          // Redirect to index.html or perform other actions upon successful email sending
      } else {
          console.error('Error sending email');
      }
  })
  .catch(error => {
      console.error('Error:', error);
  });
}

function validateFields() {
  let f = document.forms["signupForm"]["Fname"].value;
  let l = document.forms["signupForm"]["Lname"].value;
  let e = document.forms["signupForm"]["Email"].value;
  let m = document.forms["signupForm"]["message"].value;

  let valid = false;

  let fValid = false;
  let lValid = false;
  let eValid = false;
  let mValid = false;

  if (f !== "") {
      fValid = true;
  } else {
      alert("Name must be filled out");
      return false;
  }

  if (l !== "") {
      lValid = true;
  } else {
      alert("Last name must be filled out");
      return false;
  }

  if (e !== "") {
      eValid = true;
  } else {
      alert("Please enter your E-mail");
      return false;
  }

  if (m !== "") {
      mValid = true;
  } else {
      alert("Please type up your message");
      return false;
  }

  if (fValid && lValid && eValid && mValid) {

      console.log(f);
      console.log(l);
      console.log(e);
      console.log(m);

      sendEmailToServer();

      Swal.fire({
          title: "Thank you for subscribing",
          text: "A confirmation email has been sent.",
          icon: "success",
          confirmButtonText: "OK",
      }).then((result) => {
          if (result.isConfirmed) {
              redirectToIndex();
          }
      });

      return false;
  }
  return false;
}


