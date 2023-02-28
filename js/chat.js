const sendButton = document.querySelector('#send');
const message = document.querySelector('#message');
const screen = document.querySelector('.chat-screen');

sendButton.addEventListener('click', () => {
    console.log(message.value)

    screen.innerHTML +=
        `<div class="sent-message">
            ${message.value}
        </div>`

    message.value = "";
})