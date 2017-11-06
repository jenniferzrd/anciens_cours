<?php include("inc/header.php"); ?>

<h1 class="title">CRUD 2 - Créer user</h1>

<form action="api.php" method="post">
    <input type="text" class="input" id="nom" name="nom" placeholder="saisir un nom" >
    <input type="text" class="input" id="prenom" name="prenom"  placeholder="saisir un prenom" >
    <input type="email" class="input" id="email" name="email" placeholder="saisir un email" >
    <input type="submit" class="input" name="create_user" value="créer !">
</form>

<?php include("inc/footer.php"); ?>
