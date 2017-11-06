<?php
  include("inc/header.php");
  $users = readUsers();
?>

<h1 class="title">
    <a class="link" href="https://fr.wikipedia.org/wiki/CRUD">CRUD</a>
    <span>2</span>
</h1>

<p class="text">
    Créer une application pour insérer/lire/editer/supprimer des utilisateurs en base de données.<br>
    Créer une base "crud2"<br>
    Créer une table "utilisateurs" suivant ce modèle :
    <hr>
    id (mediumint, unsigned, AI, PK)<br>
    nom (varchar 128)<br>
    prenom (varchar 128)<br>
    email (varchar 256)<br>
    <hr>
</p>
<p class="text">
    La page index (lister) recence tous les utilisateurs.<br>
    Si la table utilisateurs est vide, l'indiquer par un message.<br>
    La page "create-user.php" amène au formulaire pour ajouter en base.<br>
    La page "update-user.php" amène au formulaire de mise à jour d'un user.<br>
    On peut supprimer les utilisateurs individuellement OU par groupe.
</p>
<div class="page">
    <h2 class="title">Lister les utilisateurs</h2>
    <form id="tabler_user" action="api.php" method="post">
    <?php
        if (count($users) === 0) {
            echo '<div class="info on-users">
                <span>Pas d\'utilisateurs inscrits</span>
            </div>';

        } else {
            echo '<table class="tabler user">
                <thead class="head">
                    <tr>
                        <th>id</th>
                        <th>nom</th>
                        <th>prenom</th>
                        <th>email</th>
                        <th>éditer</th>
                        <th>
                            <button class="link fa fa-times" name="delete_users"></button>
                        </th>
                    </tr>
                </thead>
                <tbody>';

            foreach ($users as $user) {
                echo "<tr class=\"head\">
                    <td>$user->id</td>
                    <td>$user->nom</td>
                    <td>$user->prenom</td>
                    <td>$user->email</td>
                    <td>
                        <a href=\"update-user.php?id=$user->id\" class=\"link fa fa-pencil\"></a>
                    </td>
                    <td class=\"delete\">
                        <input type=\"checkbox\" name=\"users_id[]\" value=\"$user->id\">
                    </td>
                </tr>";
            }

            echo '</tbody></table>';
        }

    ?>
    </form>
</div>

<?php  include("inc/footer.php"); ?>
