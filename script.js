let password = document.getElementById("password")
let lengthinput = document.getElementById("length-input")
let length = document.getElementById("length")
let uppercase = document.getElementById("uppercase")
let lowercase = document.getElementById("lowercase")
let numbers = document.getElementById("numbers")
let symbols = document.getElementById("symbols")
let button = document.getElementById("btn")
let icon = document.getElementById("copy")


// Showing input password length value
length.textContent =  lengthinput.value
lengthinput.addEventListener('input',()=>{
    length.textContent =  lengthinput.value
});


// Adding event listener to generate button
button.addEventListener('click',()=>{
    password.value = generatePassword();
})

// Characters set
let uppercaseset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercaseset = "abcdefghijklmnopqrstuvwxyz";
let numbersset = "0123456789";
let symbolsset = "~!@#$%^&*"

// Function to generate random password 
function generatePassword(){
    let randomPassword = "";
    let AllChars = "";

    AllChars += uppercase.checked ? uppercaseset : "";
    AllChars += lowercase.checked ? lowercaseset : "";
    AllChars += numbers.checked ? numbersset : "";
    AllChars += symbols.checked ? symbolsset : "";

    if(AllChars == "" || AllChars.length == 0){
        return randomPassword
    }
    for (let i = 1; i <= lengthinput.value; i++) {
        randomPassword += AllChars.charAt(Math.floor(Math.random()*AllChars.length));
    }

    return randomPassword;
}

// Adding event listener to copy icon
icon.addEventListener('click',()=>{
    if(password.value!="" || password.value.length>=1){
        navigator.clipboard.writeText(password.value);
        copy.innerText = "check";
        copy.title = "Password Copied!";
        
        setTimeout(()=>{
            copy.title = "";
            copy.innerText = "content_copy";
        },3000)
    }
})