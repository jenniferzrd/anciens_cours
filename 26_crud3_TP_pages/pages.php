<?php

include_once("inc/header.php");

$pages = getPages();
debug($pages);

function renderTemplate($pages) {
    foreach ($pages as $page) {
        echo "<li class=\"item\" data-id-page=\"$page->id\" data-position=\"$page->position\">";
            echo "<div class=\"container\">
                <span class=\"title\">$page->title</span>
                <div class=\"icon-wrap\">
                    <input type=\"checkbox\" class=\"checkbox\">
                    <i class=\"icon fa fa-caret-up\" data-action=\"up\"></i>
                    <i class=\"icon fa fa-caret-down\" data-action=\"down\"></i>
                </div>
            </div>";
            if (isset($page->children) && count($page->children)) {
                echo "<ul class=\"list\">";
                renderTemplate($page->children);
                echo "</ul>";
            }
        echo "</li>";
    }
}
?>

<div class="page" id="composant_page">

    <h1 class="title">Page</h1>

    <div class="tools">
        <input type="text" id="li_name">
        <i id="li_create" class="icon fa fa-plus">add</i>
        <i id="li_remove" class="icon fa fa-times">delete</i>
        <i id="save_pages" class="icon fa fa-floppy-o">save</i>
    </div>

    <div id="no_pages" class="no-pages">
    <?php
        if (count($pages) === 0) {
            echo "<span>pas de pages pour le moment</span>";
        }
    ;?>
    </div>

    <ul id="pages_list" class="lister">
        <?php renderTemplate($pages) ;?>
    </ul>

</div>

<?php include_once("inc/footer.php");?>
