
// ================= Store form data in formData.json
function addDataToJSON() {
    let formData = {
        first: document.getElementById("fname").value,
        last: document.getElementById("lname").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    console.log(formData);

    fetch('/add-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            console.log('Form data added to JSON!');
        } else {
            console.error('Error adding form data to JSON');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


// ================= When form is submitted, return to index.html =================
function redirectToIndex() {
  window.location.href = 'index.html';
}


// ================= Form validation =================
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

      addDataToJSON();

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


