// un . veut dire à l'intérieur de, en js

// manipulation de dom

// grâce à "document." et à une fonction native que vous trouverez sur internet

// 1 vous irez me selectionner l'élément p
// 2 vous verifirez sur un console.log votre réussite
// 3 dans un console.log vous afficherez uniquement le contenu de la balise p
// (c'est a dire le text et uniquement le txt)

// manipulation

// selectionne mon element html qui porte l'id element
let monElement =  document.querySelector("#element");

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
let classedBody = document.querySelector("body");

function dark0rlight() {
    classedBody.classList.add("dark");
    console.log(classedBody);
}

dark0rlight();
