<?php
/**
 * Plugin Name:       Image Gallery
 * Description:       This is simple image gallery block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Rejuan Ahamed
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       min-gallery
 *
 * @package           create-block
 */

# Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
* Block Initializer.
*/
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';

# Add CSS for Frontend
add_action( 'wp_enqueue_scripts', 'image_gallery_style' );
if(!function_exists('image_gallery_style')):
	function image_gallery_style(){
		# CSS
		wp_enqueue_style('magnific-popup',plugins_url('assets/css/magnific-popup.css',__FILE__));
		wp_enqueue_style('slider-css',plugins_url('assets/css/main.css',__FILE__));
		# JS
		wp_enqueue_script('main-js',plugins_url('assets/js/main.js',__FILE__), array('jquery'));
		wp_enqueue_script('magnific-popup',plugins_url('assets/js/jquery.magnific-popup.min.js',__FILE__), array('jquery'));
	}
endif;
