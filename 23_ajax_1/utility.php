<?php
session_start();
error_reporting(E_ALL);
ini_set('display_errors',1);
ini_set('display_startup_errors',1);


class DBTools {

    function __construct() {
        $this->user = null;
        $this->db = null;
        $this->passwd = null;
        $this->table = null;
    }

    private function connect() {
        try {
            $db = new PDO('mysql:host=localhost;dbname=' . $this->db, $this->user, $this->passwd);
            return $db;
        } catch (PDOException $e) {
            print "Erreur !: " . $e->getMessage() . "<br/>";
            exit("script dies @connectDatabase");
        }
    }

    private function setTable($table) {
        $this->table = $table;
    }

    private function setDatabase($db) {
        $this->db = $db;
    }
}


function debug($val, $mode = 0) {
    echo '<pre style="background:#' . substr(md5(rand()), 0, 6) . '">';
    if ($mode === 1) {
        var_dump($val);
    } else {
        print_r($val);
    }
    echo "</pre>";
}

function debugX($val, $mode = 0) {
    echo '<pre style="background:#' . substr(md5(rand()), 0, 6) . '">';
    if ($mode === 1) {
        var_dump($val);
    } else {
        print_r($val);
    }
    echo "</pre>";
    exit;
}
