const carre1 = document.getElementById("carre1")
const carre2 = document.getElementById("carre2")
const carre3 = document.getElementById("carre3")

let angle = 0
let estRouge = false
let interval


carre1.addEventListener("click", ()=>{

    // Autre exemple de correction :

    // carre1.style.backgroundColor = "red";

    // if (carre1.style.backgroundColor != "red") {
    //     carre1.style.backgroundColor = "red"
    // } else {
    //     carre1.style.backgroundColor = "green"
    // }

    estRouge ? carre1.style.backgroundColor = "green" : carre1.style.backgroundColor = "red"
    estRouge = !estRouge
})

carre2.addEventListener("click", ()=> {
    // Autre exemples de correction :

    // const liste_couleur = ["red", "green", "blue", "pink", "yellow"]
    
    // const couleur = liste_couleur[Math.floor(Math.random() * liste_couleur.length)]
    // carre2.style.backgroundColor = couleur

    // carre2.style.backgroundColor = liste_couleur[Math.floor(Math.random() * liste_couleur.length)]




    // const hexCharacters = '0123456789ABCDEF';   
    
    // let couleurhex = ""

    // for (let i=0; i<6; i++) {
    //     couleurhex += hexCharacters[Math.floor(Math.random() * hexCharacters.length)]
    // }

    // carre2.style.backgroundColor = "#" + couleurhex



    carre2.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();

})

carre3.addEventListener("mouseenter", ()=> {
    console.log('hello')
    interval = setInterval(()=>{
        angle += 10;
        carre3.style.transform = `rotate(${angle}deg)`;

    }, 100)
})


carre3.addEventListener("mouseleave", ()=> {
    clearInterval(interval)
})