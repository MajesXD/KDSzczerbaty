function logowanie() {
    const login = document.getElementById("login_bracket").value;
    const password = document.getElementById("password_bracket").value;

    fetch('http://localhost:3000/login')
        .then(response => {
            if (!response.ok) {
                throw new Error('Nie znaleziono użytkownika');
            }
            return response.json();
        })
        .then(data => {
            console.log('Zalogowano użytkownika:', data);
        })
        .catch(error => {
            console.error('Błąd:', error);
        });
}