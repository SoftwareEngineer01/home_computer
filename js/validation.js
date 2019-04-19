var inputName = document.getElementById('name'),
    inputEmail = document.getElementById('email'),
    inputSubject = document.getElementById('subject'),
    inputMessage = document.getElementById('content_message'),
    btnSend = document.getElementById('btn_send');


btnSend.addEventListener('click', function () {
    if (validateTextWithOutNumbers(inputName.value) == 1)
        alert('El nombre no esta llenado correctamente');

    if (!(isInputNotEmpty(inputEmail.value) && validateEmail(inputEmail.value)))
        alert('Email invalido');

    if (!isInputNotEmpty(inputSubject.value))
        alert('No olvides rellenar el campo asunto');

    if (!isInputNotEmpty(inputMessage.value))
        alert('No olvides rellenar el mensaje');
});

function isInputNotEmpty(text) {
    return text != null && text.length != 0 ? true : false;
}

function validateTextWithOutNumbers(text) {
    if (isInputNotEmpty(text) && isTextContainOnlyLetters(text.toLowerCase())) {
        console.info('texto valido');
        return 0;
    } else {
        console.info('texto no valido');
        return 1;
    }
}

function isTextContainOnlyLetters(text) {
    for (let i = 0; i < text.length; i++)
        if (!(text[i].charCodeAt() >= 97 && text[i].charCodeAt() <= 122))
            return false;

    return true;
}

function validateEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}