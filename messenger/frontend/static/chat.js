const chatSocket = new WebSocket(
    'ws://' + window.location.host + '/ws/chat/' + chat_id + '/'
);

chatSocket.onmessage = function(e) {
    const data = JSON.parse(e.data);
    document.querySelector('#chat-log').value += (data.sender + ": " + data.message + '\n');
};

chatSocket.onclose = function(e) {
    console.error('Chat socket closed unexpectedly');
};

document.querySelector('#chat-message-input').focus();
document.querySelector('#chat-message-input').onkeyup = function(e) {
    if (e.keyCode === 13) {  // Нажатие Enter для отправки
        const message = document.querySelector('#chat-message-input').value;
        chatSocket.send(JSON.stringify({
            'message': message
        }));
        document.querySelector('#chat-message-input').value = '';
    }
};