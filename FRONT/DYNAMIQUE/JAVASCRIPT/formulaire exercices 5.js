//les variables suivantes définissent les caractères autorisés à l'utilisateur lors du remplissage du formulaire
var alpha = /(^[A-Z]+[a-zA-Zéèêëôœîïûüàáâæç-\s]+$)/;
var Datedenaissance = nex RegExp /(^[0-9]{4}[\-]{1}[0-9]{2}[\-]{1}[[0-9]{2}$)/;
var Codepostal = new RegExp(/^[0-9]{5}$/)
var Adresse = new RegExp /(^[0-9]+[a-zA-Z-\s]+$)|^$/;
var Email = new RegExp Email = var regemail = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
var Ville = new RegExp /(^[A-Z]+[a-zA-Zéèêëôœîïûüàáâæç-\s]+$)|^$/;


// Le nom
if (!alpha.test(nom))
{
    document.getElementById("Nom").textContent = "Veuillez saisir votre nom";
    
   Event.preventDefault();
}
else {
    
document.getElementById("erreurNom").textContent = "";

}

// Le prénom
if (!alpha.test(prenom)) {
    document.getElementById("Prenom").textContent = "Veulliez votre prenom ";
    Event.preventDefault();
}
else {
    document.getElementById("erreurPrenom").textContent = "";
}

// le "sexe"
if (!Sexe.test) {

    document.getElementById("Sexe").textContent = "Veulliez choisir votre sexe ";
    Event.preventDefault();

}

//  date de naissance
if (!Datedenaissance.test) {
    document.getElementById("DatedeNaissance").textContent = "Date de naissance non conforme";
    Event.preventDefault();
}
else {
    document.getElementById("errDate").textContent = "Veuillez une date de naissance conforme";
    }

// Code postal
if (!Codepostal.test) {
    document.getElementById("Code postal").textContent = "Veuillez saisir un Code postal";
    Event.preventDefault();
}
else {
    document.getElementById("erreurCode postal").textContent = "";
}

// Adresse
if (!Adresse.test) {
    document.getElementById("Adresse").textContent = "Adresse non conforme";
    Event.preventDefault();
}
else {
    document.getElementById("erreurAdresse").textContent = "";
}

//  Ville
if (!Ville.test) {
    document.getElementById("Ville").textContent = "Utilisez uniquement des caractères alphabétiques";
    Event.preventDefault();
}
else {
    document.getElementById("erreurVille").textContent = "";
}
// Email
if (!Email.test) {
    document.getElementById("EMail").textContent = "Adresse mail non conforme";
    Event.preventDefault();
}
else {
    document.getElementById("erreurEmail").textContent = "";
}
//  Sujet

if (sujet == 1)
{
    document.getElementById("Sujet").textContent = "Selectionnez le sujet de votre requête";
    Event.preventDefault();
}
else {
    document.getElementById("erreurSujet").textContent = "";
}
// Checkbox
if (accepte != true) {
    document.getElementById("Accepte").textContent = "Veuillez cocher cette case";
    Event.preventDefault();
}
else {
    document.getElementById("erreurAccepte").textContent = "";
}
//  Question

if (question == "") {
    document.getElementById("Question").textContent = "Ce champ est obligatoire";
    Event.preventDefault();
}
else {
    document.getElementById("erreurQuestion").textContent = "";
}
});

