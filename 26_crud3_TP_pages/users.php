<?php
  include("inc/header.php");
  $users = readUsers();
?>

<div class="page">

    <h1 class="title">Utilisateurs</h1>

    <a href="user.php">créer utilisateur</a>

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
                        <a href=\"user.php?id=$user->id\" class=\"link fa fa-pencil\"></a>
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
