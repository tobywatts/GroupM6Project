// ================= Dynamically load signup page =================
document.addEventListener("DOMContentLoaded", function () {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {

        const container = document.createElement("div");
        container.className = "container-signup";
        
        const content = document.createElement("div");
        content.className = "content-signup";

        const image = document.createElement("img");
        image.className = "image-signup";
        image.src = data.signupPage.main.image.src;
        image.alt = data.signupPage.main.image.href;

        const signup = document.createElement("h1");
        signup.className = "h1-signup";
        signup.textContent = data.signupPage.main.header;

        const text1 = document.createElement("p");
        text1.className = "p-signup";
        text1.textContent = data.signupPage.main.text1;

        const form = document.createElement("form");
        form.name = data.signupPage.form.name;
        form.className = "form-signup";
        form.onsubmit = data.signupPage.form.onsubmit;

        const text = document.createElement("div");
        text.className = "text-signup";
        
        const names = document.createElement("div");
        names.className = "name-signup";
        
        const firstName = document.createElement("input");
        firstName.type = "text";
        firstName.id = "fname";
        firstName.name = data.signupPage.form.inputs.fname.name;
        firstName.placeholder = data.signupPage.form.inputs.fname.placeholder;


        const lastName = document.createElement("input");
        lastName.type = "text";
        lastName.id = "lname";
        lastName.name = data.signupPage.form.inputs.lname.name;
        lastName.placeholder = data.signupPage.form.inputs.lname.placeholder;

        const mail = document.createElement("div");
        mail.className = "mail-signup";

        const email = document.createElement("input");
        email.type = "email";
        email.id = "email";
        email.name = data.signupPage.form.inputs.email.name;
        email.placeholder = data.signupPage.form.inputs.email.placeholder;
        email.autocomplete = "on";

        const msg = document.createElement("div");
        msg.className = "message-signup";

        const message = document.createElement("textarea");
        message.className = "comment-signup"
        message.id = "message";
        message.name = data.signupPage.form.inputs.message.name;
        message.rows = data.signupPage.form.inputs.message.rows;
        message.cols = data.signupPage.form.inputs.message.collumns;
        message.placeholder = data.signupPage.form.inputs.message.placeholder;

        const button = document.createElement("input");
        button.className = "button-signup"
        button.type = "submit";
        button.value = data.signupPage.form.button.value;

        const text2 = document.createElement("p");
        text2.className = "p-signup";
        text2.textContent = data.signupPage.main.text2;  
        
        container.appendChild(content);
        content.appendChild(image);
        content.appendChild(signup);
        content.appendChild(text1);
        content.appendChild(form);
        form.appendChild(text);
        text.appendChild(names)
        names.appendChild(firstName);
        names.appendChild(lastName);
        text.appendChild(mail);
        mail.appendChild(email);
        text.appendChild(msg);
        msg.appendChild(message);
        form.appendChild(button);
        form.appendChild(text2);
;       
        document.body.appendChild(container)
        let main = document.querySelector(".main-signup");
        main.appendChild(container);        
    });
});
    

// ================= Store form data in formData.json =================
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