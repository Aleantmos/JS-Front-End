
let PRINT_FORMAT_NOT_FOUND = "Incorrect password. Try again."
let PRINT_FORMAT_FOUND = "User Acer logged in."

function login(input) {

    let rawPass = input[0];
    let passElements = rawPass.split("");

    passElements = passElements.reverse();

    let password = passElements.join("");
    
    let isFound = false;
    let cnt = 1;

    while(!isFound) {

        if (password === input[cnt]) {
            isFound = true;
            console.log(PRINT_FORMAT_FOUND);
        } else {
            console.log(PRINT_FORMAT_NOT_FOUND);
        }
        cnt++;
    }
}

login(['Acer','login','go','let me in','recA']);