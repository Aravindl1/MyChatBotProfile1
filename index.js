let chatbotMsgList = ["Hi Check My Profile in github https://github.com/Aravindl1","Hi Check My Profile in LinkedIn https://www.linkedin.com/in/aravindl54",'Follow My instagram https://www.instagram.com/in/aravind.l'];

let chatContainerEl = document.getElementById("chatContainer");
let userInputEl = document.getElementById("userInput");


function sendMsgToChatbot() {

    let userMsg = userInputEl.value;

    let msgContainerEl = document.createElement("div");
    msgContainerEl.classList.add("msg-to-chatbot-container");
    chatContainerEl.appendChild(msgContainerEl);

    let userMsgEl = document.createElement("span");
    userMsgEl.textContent = userMsg;
    userMsgEl.classList.add("msg-to-chatbot");
    msgContainerEl.appendChild(userMsgEl);

    userInputEl.value = "";
    getReplyFromChatbot();
}

function getReplyFromChatbot() {
    let chatbotlength=chatbotMsgList.length

    let chatbotMsg = chatbotMsgList[Math.ceil(Math.random() * chatbotlength)-1];

    let msgContainerEl = document.createElement("div");
    msgContainerEl.classList.add("msg-from-chatbot-container");
    chatContainerEl.appendChild(msgContainerEl);

    let chatbotMsgEl = document.createElement("span");
    chatbotMsgEl.textContent = chatbotMsg;
    chatbotMsgEl.classList.add("msg-from-chatbot");
    msgContainerEl.appendChild(chatbotMsgEl);
}