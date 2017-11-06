<?php
    include("inc/header.php");

    if (isset($_GET["id"])) {
        $page = getPage($_GET["id"]);
        $title = "Update user";
    } else {
        $title = "Create user";
    }
?>

<h1 class="title"><?php echo $title; ?></h1>

<form action="api.php" method="post">
    <input type="text" class="input" id="nom" name="nom" value="<?php echo isset($page) ? $user->nom : null; ?>" >
    <input type="text" class="input" id="prenom" name="prenom"  value="<?php echo isset($page) ? $user->prenom : null; ?>" >
    <input type="email" class="input" id="email" name="email" value="<?php echo isset($page) ? $user->email : null; ?>" >
    <input type="submit" class="input" name="update_user" value="mettre à jour !">
</form>

<?php include("inc/footer.php"); ?>
