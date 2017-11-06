<?php include("inc/header.php");?>
<body>
  <h1 class="title">CRUD 1</h1>
  <p class="text">
    L'acronyme <a class="link" href="https://fr.wikipedia.org/wiki/CRUD">CRUD</a><br>représente les opération élémentaires en programmation<br>
    CREATE / READ / UPDATE / DELETE
  </p>
  <p class="text">
    Première étape : créer une petite base de données, puis...<br>
    Insérer, lire, mettre à jour, supprimer des données !<br>
    Commençons par la méthode "classique" synchrone.<br>
    Puis en asynchrone avec le serveur.
  </p>
  <h2 class="title">Ajouter un lieu (create)
      <a href="creer-lieu.php" class="icon">
          <i class="icon fa fa-plus" aria-hidden="true"></i>
      </a>
  </h2>

  <h2 class="title">Afficher les lieux (read)</h2>
  <?php
    $all_lieux = readAllLieux();

    if (sizeof($all_lieux) === 0) {
        echo '<div class="no-result">Pas de lieux pour le moment</div>';

    } else {

      echo '<table class="tabler lieux">';
      echo '<thead class="header">';
        echo '<tr>';
          echo '<td class="id-row">ID</td>';
          echo '<td class="adresse">Adresse</td>';
          echo '<td class="cp">CP</td>';
          echo '<td class="cp">Ville</td>';
          echo "<td>Géoloc</td>";
          echo '<td>Editer</td>';
          echo '<td>Supprimer</td>';
        echo '</tr>';
      echo '</thead>';
      echo '<tbody class="body">';

      foreach ($all_lieux as $lieu) {
        echo '<tr class="item">';
            echo '<td class="id-row">'. $lieu->id .'</td>';
            echo '<td class="adresse">'. $lieu->adresse .'</td>';
            echo '<td class="cp">'. $lieu->cp .'</td>';
            echo '<td class="ville">'. $lieu->ville .'</td>';

            echo '<td class="geoloc" title="latitude:'. $lieu->lati . '&#10;longitude: ' .  $lieu->longi .'"><i class="fa fa-map-marker" aria-hidden="true"></i></td>';

            echo '<td><a title="editer" href="editer-lieu.php?id=' .
            $lieu->id . '" class="fa fa-pencil" aria-hidden="true"></a></td>';

            echo '<td><a title="supprimer" href="api.php?action=delete_lieu&id=' .
            $lieu->id . '" class="fa fa-times" aria-hidden="true"></a></td>';

        echo "</tr>";
      }

      echo '</tbody>';
      echo "</table>";
    }
  ?>
</body>
</html>
