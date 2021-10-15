var SubmitButton = document.getElementById("Submit")
var PWDinput = document.getElementById("Password")
var USRinput = document.getElementById("Username")
var errorDiv = document.getElementById("ErrorHandler")

SubmitButton.addEventListener("click", function() {
    if (PWDinput.value === "abc123" && USRinput.value === "source") {
        window.location.href = "../page.html"
    } else {
        errorDiv.style.visibility = "visible"
        console.log(PWDinput.value + '' + USRinput.value)
    }
})
