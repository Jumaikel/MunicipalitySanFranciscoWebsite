var idInput = document.getElementById("id-input");
var emailInput = document.getElementById("email-input");
var verificationInput = document.getElementById("verification-input");
var btnSendCheckbox = document.getElementById("btn-send");

btnSendCheckbox.addEventListener("change", function () {
  if (this.checked) {
    if (
      idInput.value.trim() !== "" &&
      emailInput.value.trim() !== "" &&
      verificationInput.value.trim() !== ""
    ) {
      btnSendCheckbox.disabled = false;
      this.labels[0].style.animation = "anim 3.5s linear";
      this.labels[0].addEventListener("animationend", function () {
        window.location.href = "../htm/formalities.html";
      });
    } else {
      btnSendCheckbox.checked = false;
      alert("Please fill in all the fields before sending.");
    }
  } else {
    btnSendCheckbox.disabled = true;
    this.labels[0].style.animation = "";
  }
});
