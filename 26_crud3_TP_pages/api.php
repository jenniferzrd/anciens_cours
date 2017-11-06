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

} elseif (isset($_POST["action"]) && $_POST["action"] === "post_page") {
    preparePages(json_decode($_POST["data"]));
}


// ############# PAGES #################

function getPageChildren($id_parent) {
    global $db;
    $sql = "SELECT * FROM pages WHERE id_parent = :id_parent";
    $req = $db->prepare($sql);
    $req->bindParam(":id_parent", $id_parent);
    $req->execute();
    $res = $req->fetchAll(PDO::FETCH_OBJ);

    return $res;

}

function getPages($id_parent = null) {
    global $db;

    $sql = "SELECT * FROM pages WHERE id_parent = :no_parent";
    $req = $db->prepare($sql);
    $no_parent = -1;
    $req->bindParam(':no_parent' , $no_parent);
    $req->execute();
    $pages = $req->fetchAll(PDO::FETCH_OBJ);

    foreach ($pages as $page) {
        debug($page);
        $page->children = getPageChildren($page->id);
    }

    return $pages;
}

function updatePage($page) {
    global $db;
    $sql_update = "UPDATE pages SET title = :title WHERE id = :id";
    $req = $db->prepare($sql_update);
    $req->bindParam(":title", $page->title);
    $req->bindParam(":id", $page->id);
}

function createPage($page, $id_parent = null) {
    global $db;

    $sql_insert = "INSERT INTO pages (id_parent, title, content, position, url) VALUES (:id_parent, :title, :content, :position, :url)";

    $req = $db->prepare($sql_insert);

    $req->bindParam(":id_parent", $page->id_parent);
    $req->bindParam(":title", $page->title);
    $req->bindParam(":content", $page->content);
    $req->bindParam(":position", $page->position);
    $req->bindParam(":url", $page->url);
    $req->execute();
    
    // debug($req->errorInfo());
    return $db->lastInsertId();
}

function preparePages($pages, $id_parent = -1) {

    foreach ($pages as $page) {
        // debug($page);
        if (isset($page->id)) {
            $updated_id = updatePage($page);

        } else {
            $page->id_parent = $id_parent;
            $inserted_id = createPage($page);
            // debug($inserted_id);

            if (isset($inserted_id) && count($page->children)) {
                preparePages($page->children, $inserted_id);
            }
        }
    }
}

// ############# USERS #################
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
