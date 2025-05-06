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
    const hmm = document.getElementById('hmm');

    switch (pass.value) {
        case '211605':
           eb(); break;
        case '412184':
            ft(); break;
        case '603324':
            ml(); break;
        case '262275':
            dl(); break;
        case '404214':
            ed(); break;
        case 'catalog':
            hmm.innerHTML += `<a href="catalog/catalog.html">inject</a> <br> <a href="index.html">Resist</a>`;
            break;
        default:
            console.log("Invalid password attempt");
            wait.textContent = "Please Wait...";
            setTimeout(() => {permission.textContent = "Access Denied";},6000);
    }
    pass.value = '';
}