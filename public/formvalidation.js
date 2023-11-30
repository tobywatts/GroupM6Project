function redirectToIndex() {
    window.location.href = 'index.html';
  }

function validateFields() {
    let f = document.forms["signupForm"]["Fname"].value;
    let l = document.forms["signupForm"]["Lname"].value;
    let e = document.forms["signupForm"]["Email"].value;
    let m = document.forms["signupForm"]["message"].value;

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
        let confirmation = confirm("Thank you for subscribing. Click OK to go to the index page.");
        if (confirmation) {
            redirectToIndex();
        }
        return true;
    }
}
