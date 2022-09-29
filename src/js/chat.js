"use strict"

const socket = io();

//const HiB = document.querySelector(".hi")
//const ByeB = document.querySelector(".bye")
const dayInput = document.querySelector(".startday");
const dayB = document.querySelector(".dayB")
const nickname = document.querySelector("#nickname")
const chatlist = document.querySelector(".chatting-list")
const chatInput = document.querySelector(".chatting-input");
//const sendButton = document.querySelector(".send-button");
const displayContainer = document.querySelector(".display-container")



chatInput.addEventListener("keypress", (event)=>{
    if(event.keyCode === 13){
        send()
    }
})


function send(){
    const param = {
        name: nickname.value,
        msg: chatInput.value
    }

    socket.emit("chatting", param)

    chatInput.value = null;
}

function DayGo(){
    const li = document.createElement("li");
    li.classList.add("HiM")
    const dom = `
    <b class="day" >${dayInput.value}</b>
    `;
    li.innerHTML = dom;
    chatlist.appendChild(li)
}


/*function HiGo(){
    const li = document.createElement("li");
    li.classList.add("HiM")
    const dom = `
    <span class="message">**** 익명 1999님이 대화에 참여하셨습니다 ****</span>
    `;
    li.innerHTML = dom;
    chatlist.appendChild(li)
}




function ByeGo(){
    const li = document.createElement("li");
    li.classList.add("ByeM")
    const dom = `
    <span class="message">**** 익명 1999님이 퇴장하셨습니다 ****</span>
    `;
    li.innerHTML = dom;
    chatlist.appendChild(li)
}


//sendButton.addEventListener("click", send)
HiB.addEventListener("click", HiGo)
ByeB.addEventListener("click", ByeGo)*/
dayB.addEventListener("click", DayGo)  

socket.on("chatting", (data)=>{
    const {name, msg} = data;
    const item = new LiModel(name, msg);
    item.makeLi()
    displayContainer.scrollTo(0, displayContainer.scrollHeight)
})

function LiModel(name, msg){
    this.name = name;
    this.msg = msg;
    

    this.makeLi = () =>{
        const li = document.createElement("li");
        if (this.msg === "입장") {
            li.classList.add("sent")
            const dom2 = `
            <span class="message">**** ${this.name}님이 대화에 참여하셨습니다 ****</span>
            `;
            li.innerHTML = dom2;
        }
        else if (this.msg === "퇴장") {
            li.classList.add("sent")
            const dom2 = `
            <span class="message">**** ${this.name}님이 퇴장하셨습니다 ****</span>
            `;
            li.innerHTML = dom2;
        }
        else {
            li.classList.add(nickname.value === this.name ? "sent" : "receive")
        const dom = `<span class="user">${this.name}</span>
        <span class="message">${this.msg}</span>`;
        li.innerHTML = dom;
        }
        chatlist.appendChild(li)
    }
}


