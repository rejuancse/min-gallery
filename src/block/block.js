const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Internal dependencies
 */
import Edit from './Edit';
import Save from './Save';

registerBlockType( 'gallery-images/block-gallery-images', {
	title: __( 'Image Gallery Popup' ),
	icon: 'images-alt',
	category: 'common',

	attributes: { //Attributes
		images : { type: 'array'},
		columns: { type: 'string', default: '3' },
		padding: { type: 'string', default: '15px' },
		gallery_style: { type: 'string', default: 'style1' },
	},

	edit: Edit,
	save: Save

} );
