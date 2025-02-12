import {ft} from "../directory/taylor.js";
import {eb} from "../directory/bridger.js";

export let pass = document.getElementById('password');
export let user = document.getElementById('user');

pass.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        passwordBypass();
    }
    else {
        console.log("irrelevant key press");
    }
});

function passwordBypass() { 
    
    const wait = document.getElementById('wait');
    const permission = document.getElementById('permission');
    const welcome = document.getElementById('welcome');
    const hmm = document.getElementById('hmm');

    switch (pass.value) {
        case '211605':
           eb();
           break;
        case '412184':
            ft();
            break;
        default:
            console.log("Invalid password attempt");
            wait.textContent = "Please Wait...";
            setTimeout(() => {permission.textContent = "Access Denied";},6000);
    }
    pass.value = '';
}