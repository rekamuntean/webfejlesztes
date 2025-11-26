//---------------BELÉPÉS----------------

function belepes() {
    const belepve = document.getElementById("belepve");
    belepve.classList.add("aktiv_belepes");
    document.getElementById("belépés").style.display = "none";

    localStorage.setItem('felhasznaloBelepve', 'true');
}



//---------------VALIDÁLÁS---------------

function regisztracioValidalas() {

    const vNev = document.getElementById("vnev");
    const kNev = document.getElementById("knev");
    const fNev = document.getElementById("fnev");
    const email = document.getElementById("email")
    const emailMegerosites = document.getElementById("email_meg");
    const jelszo = document.getElementById("reg_jelszo");

    const errorVNev = document.getElementById("error-vnev");
    const errorKNev = document.getElementById("error-knev");
    const errorFNev = document.getElementById("error-fnev");
    const errorEmail = document.getElementById("error-regiszt-email");
    const errorEmailMege = document.getElementById("error-email-megeros");
    const errorJelszo = document.getElementById("error-regiszt-jelszo");

    const form = document.getElementById("regisztacio-form")

    form.addEventListener('submit', function (event) {
        let isValid = true;

        const errors = document.querySelectorAll('.error-msg');
        errors.forEach(el => el.textContent = '');
        const inputs = document.querySelectorAll('input');
        inputs.forEach(el => el.classList.remove('input-error'));

        const mezoUres = "A mező kitöltése kötelező";

        if (vNev.value.trim() === "") {
            errorVNev.innerText = mezoUres;
            vNev.classList.add('input-error');
            isValid = false;
        }

        if (kNev.value.trim() === "") {
            errorKNev.innerText = mezoUres;
            kNev.classList.add('input-error');
            isValid = false;
        }

        if (fNev.value.trim() === "") {
            errorFNev.innerText = mezoUres;
            fNev.classList.add('input-error');
            isValid = false;
        }

        if (email.value.trim() === "") {
            errorEmail.innerText = mezoUres;
            email.classList.add('input-error');
            isValid = false;
        } else if (emailMegerosites.value.trim() == "") {
            errorEmailMege.innerText = mezoUres;
            emailMegerosites.classList.add('input-error');
            isValid = false;
        } else if (email.value !== emailMegerosites.value) {
            errorEmailMege.innerText = "A megerősítés nem egyezik meg az eredeti e-mail címmel!";
            email.classList.add('input-error');
            emailMegerosites.classList.add('input-error');
            isValid = false;
        }

        if (jelszo.value.trim() === "") {
            errorJelszo.innerText = mezoUres;
            jelszo.classList.add('input-error');
            isValid = false;
        } else if (jelszo.value.length < 8) {
            errorJelszo.innerText = "A beállított jelszó minimum 8 karakter hosszúságú kell legyen";
            jelszo.classList.add('input-error');
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
            console.log("Hiba az űrlapon!");
        } else {
            event.preventDefault(); 
            console.log("Minden adat rendben, átirányítás...");
            belepes();
        }
    })
}

document.addEventListener('DOMContentLoaded', regisztracioValidalas);



//---------------BEJELENTKEZÉS----------------

function bejelentkezesValidalas(){

    const email = document.getElementById("bej_email");
    const jelszo = document.getElementById("jelszó");

    const errorEmail = document.getElementById("error-email");
    const errorJelszo = document.getElementById("error-jelszo");

    const form = document.getElementById("belepes-form");

    form.addEventListener('submit', function (event) {
        let isValid = true;

        const errors = document.querySelectorAll('.error-msg');
        errors.forEach(el => el.textContent = '');
        const inputs = document.querySelectorAll('input');
        inputs.forEach(el => el.classList.remove('input-error'));

        const mezoUres = "A mező kitöltése kötelező";

        if (email.value.trim() === "") {
            errorEmail.innerText = mezoUres;
            email.classList.add('input-error');
            isValid = false;
        }

        if (jelszo.value.trim() === "") {
            errorJelszo.innerText = mezoUres;
            jelszo.classList.add('input-error');
            isValid = false;
        } else if (jelszo.value.length < 8) {
            errorJelszo.innerText = "A jelszó nem megfelelő hosszúságú (min. 8 karakter)"
            jelszo.classList.add('input-error');
            isValid = false
        }

        if (!isValid) {
            event.preventDefault();
            console.log("Hiba az űrlapon!");
        } else {
            event.preventDefault(); 
            console.log("Minden adat rendben, átirányítás...");
            belepes();
        }
    })
}

document.addEventListener('DOMContentLoaded', bejelentkezesValidalas);



// ---------------REGISZTRÁLÁS---------------

function regisztacio() {
    const regisztralas = document.getElementById("sign-in-inputs");
    regisztralas.classList.add("aktiv_regisztralas");
    document.querySelector(".log-in").style.display = "none";
    document.getElementById("sign-in-text").style.display = "none";
    document.getElementById("profil-text").innerText = "Regisztráció";
}

const regisztracioButtom = document.getElementById("regisztráció");
regisztracioButtom.addEventListener("click", regisztacio);



//---------------KIJELENTKEZÉS---------------

function alaphelyzet() {
    localStorage.removeItem('felhasznaloBelepve');

    document.getElementById("belepve").classList.remove("aktiv_belepes");
    document.getElementById("belépés").style.display = "";

    document.getElementById("sign-in-inputs").classList.remove("aktiv_regisztralas");
    document.querySelector(".log-in").style.display = "";
    document.getElementById("sign-in-text").style.display = "";
    document.getElementById("profil-text").innerText = "Bejelentkezés";

    document.querySelectorAll("input").forEach(input => {
        input.value = "";
    })

    //Vissza a főoldalra, a html-be van beépítve
}

document.getElementById("kijelentkezés").addEventListener("click", alaphelyzet);


//----------Bejelentkezés státusz lekérése----------

function aktiv_belepes() {
    const allapot = localStorage.getItem('felhasznaloBelepve');

    const bejelentkezoFelulet = document.getElementById("belépés");

    if (allapot === 'true' && bejelentkezoFelulet) {
        belepes();
    }
}

window.addEventListener('load', aktiv_belepes);