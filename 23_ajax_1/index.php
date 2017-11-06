<?php
    include_once("api.php");
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Ajax 1</title>
        <link rel="stylesheet" href="styles.css">
        <script src="jquery-3.2.1.js"></script>
        <script src="entrainementAjax.js"></script>
        <script src="app.js"></script>
        <script src="../utility/utility.js"></script>
        <script src="https://use.fontawesome.com/2d672d9c4e.js"></script>
    </head>
    <body>
        <h1 class="title">Ajax 1</h1>
        <p id="cible_content_ajax" class="text">
            AJAX : accronyme pour Asynchronous JavaScript And XML.<br>
            Cette technologie permet de faire communiquer un client web avec un serveur web de façon asynchrone (cad, sans rechargement de page, pour simplifier).<br>
            L'essort d'AJAX a rendu possible l'emergence du web 2.0, avec les chats, les sites "immersifs", les interfaces utilisateur "riches".
        </p>
        <h2 class="title">Get started</h2>
        <p class="text">
            Regardez les exemples d'appel AJAX dans le fichier entrainementAjax.js .
        </p>
        <h2 class="title">TD1</h2>
        <p class="text">
            rédiger 4 fonctions =><br>
            2 en post ET 2 en get<br>
            avec ET sans jQuery<br>
            pour envoyer (post) des données vers serveur (et debug)<br>
            pour lire (get) des données depuis le serveur OU un fichier OU une api
        </p>
        <h2 class="title">TD2</h2>
        <p class="text">
            Pour ce TD, nous utiliserons la base de données "crud2" et sa table "utilisateurs". Exploitons AJAX pour afficher le contenu de la table sans recharger la page. Mettez votre HTML en forme pour obtenir un résultat bien présenté.
        </p>
        <div id="ajax_senders"></div>
        <table id="ajax_results"></table>
    </body>















</html>
