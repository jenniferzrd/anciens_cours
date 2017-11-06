<!DOCTYPE html>
<html>
    <head>
        <title>
            <?php
            /* affiche titre article ou page suivi d'un pipe (|) à droite */
            wp_title( '|', true, 'right' );
            bloginfo('name');
            ?>
        </title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
        <link rel="stylesheet/less" type="text/css" href="<?php bloginfo('template_directory'); ?>/styles/base.less">
        <link rel="stylesheet/less" type="text/css" href="<?php bloginfo('template_directory'); ?>/styles/base.less">
        <script src="<?php bloginfo('template_directory'); ?>/js/libs/less.min.js"></script>
        <meta charset="<?php bloginfo('charset'); ?>">
        <link rel="shortcut icon" href="<?php bloginfo('template_directory'); ?>/assets/img/favicon.ico">
        <?php // wp_head(); ?>
    </head>
    <body>
        <header id="grid_header" class="grid-header">
            <a id="home_link" class="home-link" href="<?php echo esc_url(home_url("/")) ?>">
                <img id="logo_main" class="logo-main" src="<?php bloginfo('template_directory'); ?>/assets/img/logo.png" alt="my fake company logo">
            </a>
            <nav id="nav_main" class="nav-main ">
                <?php
                    $options = array(
                        "menu" => "main",
                        "menu_class" => "list f-row"
                    );
                    wp_nav_menu($options);
                ?>
            </nav>
        </header>
