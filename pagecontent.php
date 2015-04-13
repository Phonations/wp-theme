<?php $t =& peTheme(); ?>
<?php $content =& $t->content; ?>
<section class="content" id="<?php $content->slug(); ?>">
	<div class="inner post-body">
		<h1><?php $content->title(); ?></h1>
		<?php $content->content(); ?>
	</div>
</section>
