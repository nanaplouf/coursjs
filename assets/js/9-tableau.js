console.log("toto");

let fruits = ['pomme', 'banane', 'fraise'];
console.log(fruits.length);

let premier = fruits[0];
console.log(premier);

let couleurs = ["Chartreuse", "Crimson", "DarkGoldenRod", "DarkTurquoise", "DarkSalmon"];

console.log(couleurs[0]);

//Boucler sur un tableau
for(let i = 0; i < couleurs.length; i++ ){
    console.log(couleurs[i]);
    document.write(`<p style="color: ${couleurs[i]} ">J'aime les licornes</p>`)
};

//Ajouter à la fin du tableau
couleurs.push("DarkOrchid");

//Supprimer le dernier élément du tableau
couleurs.pop();

//Supprimer le premier élément du tableau
couleurs.shift();

//Ajouter au début du tableau
couleurs.unshift("HotPink");

// Trouver l'index d'un élément dans le tableau
let pos = couleurs.indexOf("Crimson");
console.log(pos);

//Supprimer un élément par son index
couleurs.splice(pos,1);

//Boucler sur un tableau
for(let i = 0; i < couleurs.length; i++ ){
    document.write(`<p style="color: ${couleurs[i]} ">J'aime les licornes</p>`)
};


let tableauFruits = ['banane', "pomme", 'fraise', "pasteque", "melon"];

let indexTab = 2;
let nombre = 3;

let nouveauTableauFruits = tableauFruits.splice(indexTab, nombre);
//indexTab = à partir de la position,
//nombre définit le nombre d'éléments à supprimer