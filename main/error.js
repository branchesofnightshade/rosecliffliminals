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
    const welcome = document.getElementById('welcome');
    const hmm = document.getElementById('hmm');

    switch (pass.value) {
        case '211605':
            console.log('Password entered: ' + pass.value);
            wait.textContent = "Please Wait...";
            setTimeout(() => {permission.textContent = "Access Granted";},2000);
            setTimeout(() => {
                let user = "E.Bridger";
                pass.style.display = "none";
                welcome.innerHTML += `Welcome Back ${user}`
                hmm.innerHTML += `<b>phoenixfeather@saveme: ~$</b><input type="text" id="think"> `

                const think = document.getElementById('think');

                think.addEventListener("keypress", function(event) {
                    if (event.key === "Enter") {
                        switch (think.value) {
                            case 'recipes':
                                let none = document.getElementById('none');
                                none.innerHTML += `https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON`;
                                break;

                            default:
                                console.log("nope");
                        }
                    } else {
                        console.log("irrelevant key press");
                    }
                    // think.value = '';
                });
            },5000);
            break;

        case '412184':
            fetch('/filesystem.json')
            .then(response => response.json())
            .then(users => {
                console.log(users);
            })
            .catch(error => console.log(error));
            break;

        default:
            console.log("Invalid password attempt");
            wait.textContent = "Please Wait...";
            setTimeout(() => {permission.textContent = "Access Denied";},6000);
    }
    pass.value = '';
}

function typeError() {

}