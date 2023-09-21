function isValidEmail(email) {
    // Regular expression pattern for a valid email address
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    // Test the email against the pattern
    return emailPattern.test(email);
}

function checkInput() {
    const email = document.getElementById('email').value;

    if(email == "" || isValidEmail(email) == false) {
        document.getElementById('error-msg').classList.remove('d-none');
        document.getElementById('email').style.borderColor = "hsl(354, 100%, 66%)";
        document.getElementById('email').classList.remove('mb-3');
    }

    // Set a timeout to remove the "d-block" class after 1 second (1000 milliseconds)
    setTimeout(() => {
        document.getElementById('error-msg').classList.add('d-none');
        document.getElementById('email').style.borderColor = "hsl(223, 100%, 88%)";
        document.getElementById('email').classList.add('mb-3');
        document.getElementById('email').value = "";
    }, 4000);
}

