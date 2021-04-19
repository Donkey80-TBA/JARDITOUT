// Exercice 1 - Calcul du nombre de jeunes, de moyens et de vieux //

var j = 0;
var a = 0;
var v = 0;
var personnes;
do {
    personnes = window.prompt("Entrez votre age");
    if (personnes < 20) {
        j++;
        console.log(personnes);
    }
    else if ((personnes >= 40) && (personnes <= 100)) {
        v++;
        console.log(v);
    }
}
while (personnes < 100);

window.alert("Il y a " + "" + j + "" + " jeunes\n " + "Il y a " + "" + a + "" + " adulte\
n " + " Il y a " + "" + v + "" + " vieux\n " + " dont " + " " + "" + " centenaire ");


// Exercice 2 : Table de multiplication //


function _TableMultiplication() {
    var res = 0;
    var i = 0;
    var tab = [];
    var X = parseInt(prompt("Entrez le nombre correspondant à la table de multiplication souhaité"));
    if (isNaN(X)) {
        window.location.reload(_TableMultiplication());
    }
    else {
        while (i <= 10) {
            res = i * X;
            tab[i] = (i + " x " + X + " = " + res + "\n");
            i++;
        }
        if (tab != 0) {
            tab = tab.join("");
            alert(tab);
        }
    }
}
_TableMultiplication();


//  Exercice 3 : recherche d'un prénom //

var tab = ["Kevin", "Fabien", "Cyril", "Khraeif", "Kevin", "Laetitia",];

var prenom = prompt("Veuillez écrire un prénom");

var saisie = prompt(`Veuillez choisir un prénom parmi ${[...tab]}.`)

    if (tab.includes(saisie)) {

    tab.splice(tab.indexOf(saisie), 1);
    tab.push(" ");
    console.log(tab)
}
else { alert("erreur") }


// Exercice 4 : total d'une commande //


var PrixUnitaire = parseFloat(prompt('Prix unitaire'));
var QuantitéCommandé = parseInt(prompt('Quantité commandée'));
var Total = prixUnitaire * QuantitéCommandé;
var Port = 0.02 * Total ;
var Remise = Total * 0.05;
var Remise2 = Total * 0.1;
var PrixTotal = 0;

if (isNaN( PrixUnitaire && QuantitéCommandé )) {
  alert('Erreur, saisissez des nombres');
}
else {

  if (Total > 500) {
    PrixTotal = Total - Remise;
    alert('Le prix à payer sera de ' + PrixTotal + '€.');
  }

  else if (Total > 200 && Total <= 500) {
    if (Port < 6) {
      Port = 6;
    }
    else {
      Port = 0.02 * Total ;
    }
    PrixTotal = Total - Remise + PrixTotal ;
    alert('Le prix à payer sera de ' + PrixTotal + '€.');
  }
  else if (Total <= 200 && Total >= 100) {
    PrixTotal = Total - Remise2 + 6;
    alert('Le prix à payer sera de ' + PrixTotal + '€.');
  }
  else {
    PrixTotal = Total + 6;
    alert('Le prix à payer sera de ' + PrixTotal.toFixed(2) + '€.');
  }
}
