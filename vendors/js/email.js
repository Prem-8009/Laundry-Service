let bookNowButton = document.getElementById('bookNowBtn');

let successMessage = document.getElementById('successMessage');

let fullName = document.getElementById('fullName');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let totalAmount = document.getElementById('totalAmount');

const now = new Date();
const options = {
  timeZone: "Asia/Kolkata",   // IST time zone
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
};
const istTime = new Intl.DateTimeFormat("en-IN", options).format(now);

bookNowButton.addEventListener('click', function () {
  if (fullName.value.trim() === '' || email.value.trim() === '' || phone.value.trim() === '') {
    alert('Please fill in all the required fields.');
    return;
  }
  sendEmail();
});

function sendEmail() {
  let emailToSend = email;
  let message = "Thank you" +  " " + fullName.value + " " + "for booking with us! Your total was " + totalAmount.textContent + ". We will get back to you soon.";
  emailjs.send("service_yy2rv1d", "template_3tqyxe6", {
    name: fullName.value,
    time: istTime,
    message: message,
    email: emailToSend.value
  }).then(function (response) {
    cart = [];
    fullName.value = '';
    email.value = '';
    phone.value = '';
    buttonContainer1.innerHTML = "";
    buttonContainer1.appendChild(addButton1);
    buttonContainer2.innerHTML = "";
    buttonContainer2.appendChild(addButton2);
    buttonContainer3.innerHTML = "";
    buttonContainer3.appendChild(addButton3);
    buttonContainer4.innerHTML = "";
    buttonContainer4.appendChild(addButton4);
    buttonContainer5.innerHTML = "";
    buttonContainer5.appendChild(addButton5);
    buttonContainer6.innerHTML = "";
    buttonContainer6.appendChild(addButton6);
    updateCartDisplay();
    updateSubmitState();
    successMessage.innerText = "Email sent successfully!";
    successMessage.style.display = 'flex';
    // Apply transition effect
    successMessage.style.opacity = '1';
    setTimeout(function () {
      successMessage.style.display = 'none';
      successMessage.style.opacity = '0';
    }, 3000);
    console.log("SUCCESS!", response.status, response.text);
  }, function (error) {
    successMessage.innerText = "Failed to send email. Please try again later.";
    successMessage.style.display = 'flex';
    // Apply transition effect
    successMessage.style.opacity = '1';
    setTimeout(function () {
      successMessage.style.display = 'none';
      successMessage.style.opacity = '0';
    }, 3000);
    console.error("FAILED...", error);
  });
}