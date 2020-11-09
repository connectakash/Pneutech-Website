function sendEmail(sub, b) {
    Email.send({
        SecureToken: "9385a465-cfaa-4bed-b064-d13a220f29f9",
        To: 'akashprajasekharan@gmail.com',
        From: "no-reply@techcreativa.com",
        Subject: sub,
        Body: b
    }).then(
        message => alert("Your form is successfully submitted")
    );
}