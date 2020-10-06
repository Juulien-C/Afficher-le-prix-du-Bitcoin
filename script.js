// Appeler et utiliser une API

url = "https://blockchain.info/ticker";

function recupererPrix() {
  // Créer une requête
  let requete = new XMLHttpRequest(); // Créer un objet
  requete.open('GET', url); // 1er parametre GET / POST, 2eme parametre : url
  requete.responseType = 'json'; // On attends du JSON
  requete.send(); // on envoit notre requete

  // Dès que l'on reçoit une réponse, cette fonction est exécutée
  requete.onload = function () {
    if(requete.readyState === XMLHttpRequest.DONE ) {
      if(requete.status === 200) {
        let reponse = requete.response; // on stock la reponse
        let prixEnEuro = reponse.EUR.last; 
        document.querySelector('#price_label').textContent = prixEnEuro;
      }
      else {
        alert('Un problème est intervenu merci de revenir plus tard');
      }
    }
  }
  console.log('Prix actualisé');
}
setInterval(recupererPrix, 1000); // on appelle la fonction toutes les secondes