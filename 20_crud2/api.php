<?php
include_once("utility.php");

$db = connectDatabase();

if (isset($_POST["create_user"])) {
    createUser();
    header("Location: index.php");

} elseif (isset($_POST["update_user"])) {
    updateUser();
    header("Location: index.php");

} elseif (isset($_POST["delete_users"])) {
    deleteUsers();
    header("Location: index.php");
}

function createUser() {
    global $db;
    // debugX($_POST);
    $req = $db->prepare("INSERT INTO utilisateurs (nom, prenom, email) VALUE (:nom, :prenom, :email)");
    $req->bindParam(":nom", $_POST["nom"]);
    $req->bindParam(":prenom", $_POST["prenom"]);
    $req->bindParam(":email", $_POST["email"]);

    $res = $req->execute();
    return $res;
}

function readUser($id) {
    global $db;
    $req = $db->prepare("SELECT * FROM utilisateurs WHERE id = :id");
    $req->bindParam(":id", $id);
    $req->execute();
    $res = $req->fetch(PDO::FETCH_OBJ);
    return $res;
}

function readUsers() {
    global $db;
    $req = $db->prepare("SELECT * FROM utilisateurs");
    $req->execute();
    $res = $req->fetchAll(PDO::FETCH_OBJ);
    return $res;
}

function updateUser() {
    global $db;
    $req = $db->prepare("UPDATE `utilisateurs` SET `nom` = :nom, `prenom` = :prenom, `email` = :email WHERE id = :id");
    $req->bindParam(":id", $_SESSION["current_user_id"]);
    $req->bindParam(":nom", $_POST["nom"]);
    $req->bindParam(":prenom", $_POST["prenom"]);
    $req->bindParam(":email", $_POST["email"]);

    $res = $req->execute();
    // debugX($res);
    unset($_SESSION["current_user_id"]);
    return $res;
}

function deleteUsers() {
    global $db;
    // debugX($_POST);
    if (isset($_POST["users_id"])) {
        foreach ($_POST["users_id"] as $key => $id) {
            $req = $db->prepare("DELETE FROM `utilisateurs` WHERE id = :id");
            $req->bindParam(":id", $id);
            $req->execute();
        }
    }
}
