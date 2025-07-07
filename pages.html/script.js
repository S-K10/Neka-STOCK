javascript
// Initialiser les variables pour les seuils
let seuilMin = 10; // Seuil minimum de stock
let seuilMax = 100; // Seuil maximum de stock
let stockActuel = 50; // Valeur initiale du stock

// Fonction pour calculer le total des entrées
function updateEntryTotal() {
    let quantityEntry = parseInt(document.getElementById('quantity-entry').value);
    let priceEntry = parseFloat(document.getElementById('price-entry').value);
    let totalEntry = quantityEntry * priceEntry; // Calcul du total
document.getElementById('total-entry').textContent = totalEntry.toFixed(2) + " FCFA"; // Affichage du total
}

// Fonction pour calculer le total des sorties
function updateExitTotal() {
    let quantityExit = parseInt(document.getElementById('quantity-exit').value);
    let priceExit = parseFloat(document.getElementById('price-exit').value);
    let totalExit = quantityExit * priceExit; // Calcul du total

    document.getElementById('total-exit').textContent = totalExit.toFixed(2) + " FCFA"; // Affichage du total
}

// Sélectionner le bouton "Ajouter" pour les entrées de stock
document.querySelector('.btn-add').addEventListener('click', function () {
    let productName = document.getElementById('product-name').value;
    let quantityEntry = parseInt(document.getElementById('quantity-entry').value);
    let priceEntry = parseFloat(document.getElementById('price-entry').value);
    let totalEntry = quantityEntry * priceEntry; // Calcul du total

    // Ajouter les quantités et afficher un message
    if (productName && quantityEntry > 0 && priceEntry > 0) {
        // Ajouter la ligne au tableau des entrées
        let entryList = document.getElementById("entry-list");
        let newRow = document.createElement("tr");
        newRow.innerHTML = `
<td>productName</td>
            <td>{quantityEntry}</td>
            <td>priceEntry FCFA</td>
            <td>{totalEntry} FCFA</td>
            <td>document.getElementById('entry-date').value</td>
            <td><button class="btn-delete">Supprimer</button></td>
        `;
        entryList.appendChild(newRow);

        // Mise à jour de l'alerte et du stock
        stockActuel += quantityEntry;
        checkStockLevel();
     else 
        alert("Veuillez entrer des données valides !");
    );

// Fonction pour vérifier les niveaux de stock et afficher l'alerte
function checkStockLevel() 
    let alertMessage = document.getElementById("alert-message");

    // Réinitialiser les messages d'alerte
    alertMessage.style.display = 'none';
    alertMessage.classList.remove('alert-red', 'alert-yellow', 'alert-green');

    if (stockActuel < seuilMin) 
        alertMessage.style.display = 'block';
        alertMessage.classList.add('alert-red');
        alertMessage.textContent = Alerte Rouge : Stock très bas ! ({stockActuel} articles);
    } else if (stockActuel <= seuilMax) {
        alertMessage.style.display = 'block';
        alertMessage.classList.add('alert-yellow');
alertMessage.textContent = Alerte Jaune : Niveau de sécurité bas ! (stockActuel articles);
     else 
        alertMessage.style.display = 'block';
        alertMessage.classList.add('alert-green');
        alertMessage.textContent = Alerte Verte : Stock élevé ! ({stockActuel} articles);
    }
}

// Sélectionner le bouton "Retirer" pour les sorties de stock
document.querySelector('.btn-remove').addEventListener('click', function () {
    let productNameExit = document.getElementById('product-name-exit').value;
    let quantityExit = parseInt(document.getElementById('quantity-exit').value);
    let priceExit = parseFloat(document.getElementById('price-exit').value);
    let totalExit = quantityExit * priceExit; // Calcul du total pour la sortie

    // Ajouter les sorties et afficher un message
    if (productNameExit && quantityExit > 0 && priceExit > 0) {
        // Ajouter la ligne au tableau des sorties
        let exitList = document.getElementById("exit-list");
        let newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>productNameExit</td>
            <td>{quantityExit}</td>
            <td>priceExit FCFA</td>
            <td>{totalExit} FCFA</td>
            <td>${document.getElementById('exit-date').value}</td>
<td><button class="btn-delete">Supprimer</button></td>
        `;
        exitList.appendChild(newRow);

        // Mise à jour du stock après retrait
        stockActuel -= quantityExit;
        checkStockLevel();
    } else {
        alert("Veuillez entrer des données valides !");
    }
});

// Fonction pour supprimer une ligne (enregistrement d'entrée ou de sortie)
document.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('btn-delete')) {
        e.target.closest('tr').remove(); // Supprimer la ligne
    }
});

// Écouteurs pour mettre à jour le total des entrées et sorties
document.getElementById('quantity-entry').addEventListener('input', updateEntryTotal);
document.getElementById('price-entry').addEventListener('input', updateEntryTotal);

document.getElementById('quantity-exit').addEventListener('input', updateExitTotal);
document.getElementById('price-exit').addEventListener('input', updateExitTotal);
```
