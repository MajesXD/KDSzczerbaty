const { application, response } = require("express");

function logowanie() {
    const login = document.getElementById("login_bracket").value;
    const password = document.getElementById("password_bracket").value;

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify({login, password})
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Nie znaleziono użytkownika');
            }
            return response.json();
        })
        .then(data => {
            const current_login = data.login;
            const current_haslo = data.haslo;
            const current_imie = data.imie;
            const current_nazwisko = data.nazwisko;
            const current_nr_tel = data.nr_tel;
            const current_kod_pocztowy = data.kod_pocztowy;
            const current_miasto = data.miasto;
            const current_ulica = data.ulica;
            const current_nr_mieszkania = data.nr_mieszkania;
            const current_specjalizacja = data.specjalizacja;

            console.log('Zalogowano jako:', data);

        })
        .catch(error => {
            console.error('Błąd:', error);
        });    
};
