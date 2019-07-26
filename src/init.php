<?php

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function min_gallery_block_assets() { // phpcs:ignore
	// Register block styles for both frontend + backend.
	wp_register_style(
		'min_gallery-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ),
		array( 'wp-editor' ),
		null 
	);

	// Register block editor script for backend.
	wp_register_script(
		'min_gallery-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
		null,
		true
	);

	// Register block editor styles for backend.
	wp_register_style(
		'min_gallery-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), 
		array( 'wp-edit-blocks' ), 
		null 
	);

	register_block_type(
		'min-gallery/block-min-gallery', array(
			'style'         => 'min_gallery-style-css',
			'editor_script' => 'min_gallery-block-js',
			'editor_style'  => 'min_gallery-block-editor-css',
		)
	);
}

// Hook: Block assets.
add_action( 'init', 'min_gallery_block_assets' );
