// un . veut dire à l'intérieur de, en js

// manipulation de dom

// grâce à "document." et à une fonction native que vous trouverez sur internet

// 1 vous irez me selectionner l'élément p
// 2 vous verifirez sur un console.log votre réussite
// 3 dans un console.log vous afficherez uniquement le contenu de la balise p
// (c'est a dire le text et uniquement le txt)

// manipulation

// selectionne mon element html qui porte l'id element
let monElement = document.querySelector("#element");

// un log du contenu de mon element
console.log(monElement);

// un log uniquement du text contenu dans mon element
console.log(monElement.textContent);

// modifier le text dans l'element qui porte l'id element!
// MA VERSION! 
// let modifiedTxt = document.getElementById("element").innerHTML = "HEYHEYHEY";
// console.log(modifiedTxt); 

// versio corrigé 
monElement.textContent = "HEYHEYHEYHEYHEYEHEY";

// ajouter la class "dark" que vous aurez crée préalablement definie a l'element body de votre html
// tout ca dans une fonction dark0rlight()
let classedBody = document.getElementById("body");
const darkBtn = document.getElementById("darkBtn")

function darkOrlight() {
    classedBody.classList.add("dark");
    lightBody.classList.remove("light");
}
// getelement (byid par ex) est plus opti que queryselector
// au click executer la function darkOrlight
darkBtn.addEventListener("click", darkOrlight);

// mtn faire le btn light
const lightBtn = document.getElementById("lightBtn");
console.log(lightBtn)

// je créer une variable const lightBtn, avec document. je rentre dans mon html
// avec la fonction native getelementbyidje vais chercher mon id lightbtn crée dans le html

let lightBody = document.getElementById("body");
console.log(lightBody);

// je créer une variable lightBody, tout comme la variable lightbtn je mets doc. et ensuite la meme fonction native
// cette fois-ci je vais chercher mon id Body

function lightOrDark() {
    lightBody.classList.add("light");
    lightBody.classList.remove("dark");
    // avec classlist et la fonction remove, je retire la class dark car sinon après avoir appuyé sur les 2btn
    // mon body aura 2 class
    // je l'ai également mis dans ma fonction darkOrLight
}
// Création d'une fonction lightOrDark (inverse ma fonction darkOrLight), je dis dans cette fonction que j'ajoute
// une class "light" crée dans mon css, étant donné que c'est avec ma variable lightBody
// classlist permet de gérer les classes CSS d'un élément
// c'est mon body qui sera affecté par cet ajout de class

lightBtn.addEventListener("click", lightOrDark);
// je rappelle la variable lightbtn, je lui ajoute la fonction native addEventListener(un écouteur en FR)
// dans la parantèse on commence par le type, ici c'est le click, ensuite je lui mets ma fonction pour qu'elle se
// décapsule