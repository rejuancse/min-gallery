<?php
/**
* Plugin Name: Min Gallery
* Description: Min Gallery — is a Gutenberg Image Gallery Block.
* Author: Rejuan Ahamed
* Version: 1.0.0
* License: GPL2+
*
* @package Min Gallery
*/

# Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
* Block Initializer.
*/
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';

# Add CSS for Frontend
add_action( 'wp_enqueue_scripts', 'min_slider_style' );
if(!function_exists('min_slider_style')):
	function min_slider_style(){
		# CSS
		wp_enqueue_style('magnific-popup',plugins_url('assets/css/magnific-popup.css',__FILE__));
		wp_enqueue_style('slider-css',plugins_url('assets/css/main.css',__FILE__));
		# JS
		wp_enqueue_script('main-js',plugins_url('assets/js/main.js',__FILE__), array('jquery'));
		wp_enqueue_script('magnific-popup',plugins_url('assets/js/jquery.magnific-popup.min.js',__FILE__), array('jquery'));
	}
endif;
