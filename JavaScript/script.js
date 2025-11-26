document.addEventListener("DOMContentLoaded", () => {
    const receptek = document.querySelectorAll(".recept");

    receptek.forEach(recept => {
        const adagElem = recept.querySelector(".adag");
        const pluszGomb = recept.querySelector(".plusz");
        const minuszGomb = recept.querySelector(".minusz");
        const hozzavalok = recept.querySelectorAll("ul li");

        //intté alakítás
        let alapAdag = parseInt(adagElem.textContent); 

        function frissit() {
            let ujAdag = parseInt(adagElem.textContent);
            let arany = ujAdag / alapAdag;

            hozzavalok.forEach(li => {
                let base = parseFloat(li.getAttribute("data-base"));

                //egy sor
                let teljes = li.textContent.trim();
                let szavak = teljes.split(" ");
                let eredetiSzam = szavak[0];

                //eredeti első szó nem szám, kihagyjuk
                if (isNaN(parseFloat(eredetiSzam))) return;


                let ujErtek = base * arany;

                //egész szám/ tizedes tört
                if (ujErtek % 1 === 0) {
                    ujErtek = ujErtek.toString();
                } else {
                    ujErtek = ujErtek.toFixed(1); //egy tizedesjegy
                }

                szavak[0] = ujErtek;
                li.textContent = szavak.join(" ");
            });
        }

        pluszGomb.addEventListener("click", () => {
            let aktualis = parseInt(adagElem.textContent);
            aktualis++;
            adagElem.textContent = aktualis;
            frissit();
        });

        minuszGomb.addEventListener("click", () => {
            let aktualis = parseInt(adagElem.textContent);
            if (aktualis > 1) {
                aktualis--;
                adagElem.textContent = aktualis;
                frissit();
            }
        });
    });
});
