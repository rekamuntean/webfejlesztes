
document.addEventListener("DOMContentLoaded", () => {

    const containers = document.querySelectorAll(".container");

    containers.forEach(container => {
        
        const slider = container.querySelector(".slider"); 

        const items = Array.from(slider.querySelectorAll(".recept_kat"));

        const balGomb = container.querySelector(".bal");
        const jobbGomb = container.querySelector(".jobb");

        let index = 0;

        const receptValtas = (direction) => {
            
            items[index].classList.remove("active");

            let newIndex = index + direction;

            //körbeforgás
            if (newIndex < 0) {
                newIndex = items.length - 1; 
                
            } else if (newIndex >= items.length) {
                newIndex = 0; 
            }
            
            index = newIndex;
            items[index].classList.add("active");
        };


        // gombok beállítása (Bal és Jobb nyíl)
        if (balGomb) {
            balGomb.addEventListener("click", () => receptValtas(-1));
        }
        
        if (jobbGomb) {
            jobbGomb.addEventListener("click", () => receptValtas(1));
        }

        // alaphelyzet
        items.forEach((item, i) => {
            if (item.classList.contains("active")) {
                index = i;
            } else {
                item.classList.remove("active");
            }
        });
    });
});