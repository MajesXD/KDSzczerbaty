function logowanie(){
    document.getElementById('login_button').addEventListener("click", function() {
        const login_input = document.getElementById("login_bracket").value;
        const password_input = document.getElementById("password_bracket").value;

        alert(login_input +' '+ password_input);
    })
}