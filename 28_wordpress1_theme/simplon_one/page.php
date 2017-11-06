<?php
/*
Template Name: simplon_one
*/
get_header();?>

<div id="page_main" class="page main">
<?php if (have_posts()) : ?>
    <?php while (have_posts()) : the_post(); ?>
    <div class="post">
        <h1 class="title">
            <?php the_title(); ?>
        </h1>
        <div class="content">
            <?php the_content(); ?>
        </div>
    </div>
    <?php endwhile; ?>
<?php endif; ?>
</div>
<?php get_footer(); ?>
