function SendMail() {
    var params = {
        from_name: document.getElementById("first-name").value + " " + document.getElementById("last-name").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value,
    }
    emailjs.send("service_5e3dx52", "template_nbju4dc", params).then(function (res) {
        alert("Success!" + res.status);
        // Reset box
        document.getElementById("first-name").value = "";
        document.getElementById("last-name").value = "";
        document.getElementById("email_id").value = "";
        document.getElementById("message").value = "";
    })
}
