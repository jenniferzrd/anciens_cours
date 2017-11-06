<?php
/**
 * Twenty Sixteen functions and definitions
 *
 * Set up the theme and provides some helper functions, which are used in the
 * theme as custom template tags. Others are attached to action and filter
 * hooks in WordPress to change core functionality.
 *
 * When using a child theme you can override certain functions (those wrapped
 * in a function_exists() call) by defining them first in your child theme's
 * functions.php file. The child theme's functions.php file is included before
 * the parent theme's file, so the child theme functions would be used.
 *
 * @link https://codex.wordpress.org/Theme_Development
 * @link https://codex.wordpress.org/Child_Themes
 *
 * Functions that are not pluggable (not wrapped in function_exists()) are
 * instead attached to a filter or action hook.
 *
 * For more information on hooks, actions, and filters,
 * {@link https://codex.wordpress.org/Plugin_API}
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */


 function set_default_editor() {
  $r = 'tinymce';
  return $r;
 }
 add_filter( 'wp_default_editor', 'set_default_editor' );

function activate_menu() {
    register_nav_menus(array(
        'header' => 'Header menu',
        'footer' => 'Footer menu'
    ));
}

add_action('after_setup_theme', 'activate_menu');

function remove_admin_bar() {
    // if (!current_user_can('administrator') && !is_admin()) {
      show_admin_bar(false);
    // }
}
add_action('after_setup_theme', 'remove_admin_bar');


/**
  * perform a nice debug view for any var
  *
  * @author guillaume owl <guillaume@ow-lab.com>
  *
  * @param mixed   $val the value to debug
  * @param int $mode 0 or null var dump, 1 print_r
  * @return null
  */
 function debug($val, $mode = 0) {
     echo '<pre style="background:#' . substr(md5(rand()), 0, 6) . '">';
     if ($mode === 1) {
         var_dump($val);
     } else {
         print_r($val);
     }
     echo "</pre>";
 }

 /**
   * perform a nice debug view for any var
   * and then exit the script
   *
   * @author guillaume owl <guillaume@ow-lab.com>
   *
   * @param mixed   $val the value to debug
   * @param int $mode 0 or null var dump, 1 print_r
   * @return null
   */
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
