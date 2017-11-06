<?php

include_once("utility.php");

$db = new DBTools();
// debugX($db);
//echo "@apiphp";

if (isset($_GET["action"])) {
    echo "<pre>";
        print_r($_GET);
    echo "</pre>";
}

elseif (isset($_POST["action"])) {

    // debug(json_decode($_POST["cakes"]));

    $o = new stdClass();
    $o->msg = "je suis généré par le server @api.php";

    echo json_encode($o);

    // echo "<pre>";
        // $cakes = json_decode($_POST["cakes"]);
        // debug($cakes[0]->flavor);
        // print_r(json_decode($_POST["cakes"][0]->flavor));
    // echo "</pre>";
}
//
// else {
//     echo "wééé gros !";
// }
