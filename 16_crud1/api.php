<?php include_once("utility.php");


$db = connectDatabase();

if (isset($_POST["create_lieux"])) {
  createLieu();
  header("Location: index.php");

} elseif (isset($_GET["action"]) && $_GET["action"] === "read_lieux") {
  readAllLieux();
  header("Location: index.php");

} elseif (isset($_GET["action"]) && $_GET["action"] === "delete_lieu") {
    deleteLieu();
    header("Location: index.php");

} elseif (isset($_POST["update_lieu"])) {
    updateLieu();
    header("Location: index.php");
}


function createLieu() {
  global $db;
  $req = $db->prepare("INSERT INTO lieux (adresse, cp, ville, lati, longi) VALUES (:adresse, :cp, :ville, :lati, :long)");

  $req->bindParam(':adresse', $_POST["adresse"]);
  $req->bindParam(':cp', $_POST["cp"]);
  $req->bindParam(':ville', $_POST["ville"]);
  $req->bindParam(':lati', $_POST["lati"]);
  $req->bindParam(':long', $_POST["long"]);

  $res = $req->execute();
  header("Location: index.php");
  // debugX($res);
}


function readLieu($id) {
  global $db;
  $req = $db->prepare("SELECT * FROM lieux WHERE id = :id");
  $req->bindParam(':id', $id);
  $req->execute();
  $res = $req->fetch(PDO::FETCH_OBJ);
  return $res;
}


function readAllLieux() {
  global $db;
  $req = $db->prepare("SELECT * FROM lieux");
  $req->execute();
  $res = $req->fetchAll(PDO::FETCH_OBJ);
  return $res;
}


function updateLieu() {
  global $db;
  $req = $db->prepare("UPDATE `lieux` SET `adresse` = :adresse, `cp` = :cp, `ville` = :ville, `lati` = :lati, `longi` = :long WHERE id = :id");
  $req->bindParam(':id', $_SESSION["current_id_lieu"]);
  $req->bindParam(':adresse', $_POST["adresse"]);
  $req->bindParam(':cp', $_POST["cp"]);
  $req->bindParam(':ville', $_POST["ville"]);
  $req->bindParam(':lati', $_POST["lati"]);
  $req->bindParam(':long', $_POST["long"]);
  $res = $req->execute();
  unset($_SESSION["current_id_lieu"]);
  return $res;
}


function deleteLieu() {
    global $db;
    $req = $db->prepare("DELETE FROM lieux WHERE id = :id");
    $req->bindParam(':id', $_GET["id"]);
    $req->execute();
  // echo $sql;
}
