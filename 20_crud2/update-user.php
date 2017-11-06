<?php
    include("inc/header.php");
    $_SESSION["current_user_id"] = $_GET["id"];
    $user = readUser($_GET["id"]);
?>

<h1 class="title">CRUD 2 - Update user</h1>

<form action="api.php" method="post">
    <input type="text" class="input" id="nom" name="nom" value="<?php echo $user->nom; ?>" >
    <input type="text" class="input" id="prenom" name="prenom"  value="<?php echo $user->prenom; ?>" >
    <input type="email" class="input" id="email" name="email" value="<?php echo $user->email; ?>" >
    <input type="submit" class="input" name="update_user" value="mettre à jour !">
</form>

<?php include("inc/footer.php"); ?>
