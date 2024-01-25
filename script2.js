window.addEventListener("load", function() {
    var form = document.getElementById("support-form");
    form.addEventListener("submit", function(event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });

    function validateForm() {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var contactNumber = document.getElementById("contact-number").value;
        var message = document.getElementById("message").value;

        var isValid = true;

        if (name.trim() === "") {
            isValid = false;
            alert("Please enter your name.");
        }

        if (email.trim() === "") {
            isValid = false;
            alert("Please enter your email.");
        }

        if (contactNumber.trim() === "") {
            isValid = false;
            alert("Please enter your contact number.");
        }

        if (message.trim() === "") {
            isValid = false;
            alert("Please enter your message.");
        }

        return isValid;
    }
});