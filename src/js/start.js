"use strict"

const socket = io();

const nameButton = document.querySelector(".nameBox");
const Newname = document.querySelector("#NEWnickname")
const savename = "¿Õ∏Ì";

function save(){
    savename = Newname.value;
}

nameButton.addEventListener("click", save)

export default savename;
