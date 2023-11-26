const form = document.querySelector("form");
const fullName = document.getElementById("fullName");
const emailAddress = document.getElementById("emailAddress");
const phoneNumber = document.getElementById("phoneNumber");
// const checkbox = document.getElementById("checkbox");
const addInfo = document.getElementById("addInfo");

function sendEmail() {
const bodyMessage = `Full Name: ${fullName.value}<br>
Email: ${emailAddress.value}<br> 
Phone Number: ${phoneNumber.value}<br>
Additional Information: ${addInfo.value}<br>`

    Email.send({
        SecureToken: "f7666d63-15b8-4bf2-ac60-d1a3d8418244",
        To : 'staceyle2001@gmail.com',
        From : "staceyle2001@gmail.com",
        Subject : "Stacey Le Photography - New Contact!",
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK")
        {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
      }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();

    form.reset();
});