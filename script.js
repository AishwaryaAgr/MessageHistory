const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');

sendBtn.addEventListener('click', sendMsg)

function sendMsg(){
    let content = messageIn.value;

    if(content === ''){
        alert('Invalid Entry');
    }
    else{
        messageOut.innerHTML = content;
        messageIn.value = '';
    }
}