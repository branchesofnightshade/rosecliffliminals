let pass = document.getElementById('password');
let user = document.getElementById('user');

pass.addEventListener("keypress", function(event) {
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

    switch (pass.value) {
        case '211605':
        console.log(pass.value);
        wait.innerHTML +=  `
        <span>Please Wait...</span>
        `
        permission.innerHTML += `
        <span>Access Granted</span>
        `
        break;

        default:
        console.log("mb chat");
    }
}