<?php
    include("inc/header.php");
    if (isset($_GET["id"])) {
        $user = readUser($_GET["id"]);
        $title = "Update user";
    } else {
        $title = "Create user";
    }
?>

<h1 class="title"><?php echo $title; ?></h1>

<form action="api.php" method="post">
    <input type="text" class="input" id="nom" name="nom" value="<?php echo isset($user) ? $user->nom : null; ?>"  placeholder="<?php echo isset($user) ? $user->nom : "saisir un nom"; ?>">
    <input type="text" class="input" id="prenom" name="prenom"  value="<?php echo isset($user) ? $user->prenom : null; ?>"  placeholder="<?php echo isset($user) ? $user->prenom : "saisir un prénom"; ?>">
    <input type="email" class="input" id="email" name="email" value="<?php echo isset($user) ? $user->email : null; ?>"  placeholder="<?php echo isset($user) ? $user->email : "saisir un email"; ?>">
    <input type="submit" class="input" name="<?php echo isset($user) ? "update_user" : "create_user"; ?>" value="<?php echo $title;?>">
</form>

<?php include("inc/footer.php"); ?>
