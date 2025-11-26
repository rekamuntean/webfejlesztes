//---------Bejelentkezés státusz lekérése----------

function bejelentkezesStatusz() {
    const allapot = localStorage.getItem('felhasznaloBelepve');

    const feltoltesBejelentkezes = document.getElementById("feltoltes_bejelentkezes");

    if (allapot === 'true' && feltoltesBejelentkezes) {
        feltoltesBejelentkezes.style.display = 'none';

        document.getElementById("div_upload").classList.add("aktiv_upload")
    }
}

window.addEventListener('load', bejelentkezesStatusz);



//--------------Recept validálása--------------

function receptValidalas() {

    const cim = document.getElementById("upload-title");
    const kep = document.getElementById("upload-file");
    const adag = document.getElementById("megadott_adag");
    const hozzavalok = document.getElementById("ingredient")
    const elkeszites = document.getElementById("upload-text")

    const errorCim = document.getElementById("error-cim");
    const errorKep = document.getElementById("error-kep");
    const errorAdag = document.getElementById("error-adag")
    const errorHozzavalok = document.getElementById("error-hozzavalo");
    const errorElkeszites = document.getElementById("error-elkeszites");

    const form = document.getElementById("upload-form");

    form.addEventListener("submit", function (event) {
        let isValid = true;

        const errors = document.querySelectorAll('.error-msg');
        errors.forEach(el => el.textContent = '');
        const inputs = document.querySelectorAll('input, textarea');
        inputs.forEach(el => el.classList.remove('input-error'));

        const mezoUres = "A mező kitöltése kötelező";

        if (cim.value.trim() === "") {
            errorCim.innerText = mezoUres;
            cim.classList.add('input-error');
            isValid = false;
        }

        if (kep.files.length === 0) {
            errorKep.innerText = mezoUres
            isValid = false
        }

        if (adag.value.trim() === "") {
            errorAdag.innerText = mezoUres;
            adag.classList.add('input-error');
            isValid = false;
        } else if (Number(adag.value) < 1) {
            errorAdag.innerText = "A megadott adag nem hiteles (min. 1)";
            adag.classList.add("input-error");
            isValid == false;
        }

        if (hozzavalok.value.trim() === "") {
            errorHozzavalok.innerText = mezoUres;
            hozzavalok.classList.add('input-error');
            isValid = false;
        }

        if (elkeszites.value.trim() === "") {
            errorElkeszites.innerText = mezoUres;
            elkeszites.classList.add('input-error');
            isValid = false;
        }


        if (!isValid) {
            event.preventDefault();
            console.log("Hiba az űrlapon!");
        } else {
            event.preventDefault(); 
            console.log("Minden adat rendben, átirányítás...");
            receptFeltoltes();
        }
    })
}

document.addEventListener('DOMContentLoaded', receptValidalas);



//--------Recept feltöltése-------------

function receptFeltoltes() {
    document.querySelectorAll("input").forEach(input => {
        input.value = "";
    })

    document.querySelectorAll("textarea").forEach(textarea => {textarea.value = "";})

    alert("A recept sikeresen fel lett töltve!");
}