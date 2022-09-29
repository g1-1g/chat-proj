"use strict"

const socket = io();

const nameButton = document.querySelector(".nameBox");
const Newname = document.querySelector("#NEWnickname")
const savename = "익명";

function save(){
    savename = Newname.value;
}

nameButton.addEventListener("click", save)

export default savename;