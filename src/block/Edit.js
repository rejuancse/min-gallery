//  Import CSS.
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Button, PanelBody } = wp.components;
const { MediaUpload, InspectorControls } = wp.editor;
import { SelectControl, TextControl} from '@wordpress/components';
import { withState } from '@wordpress/compose';

export default function Edit({ attributes, setAttributes }) {

    //Destructuring the images array attribute
    const {images = [], columns, padding, gallery_style} = attributes;

    // This removes an image from the gallery
    const removeImage = (removeImage) => {
        //filter the images
        const newImages = images.filter( (image) => {
            if(image.id != removeImage.id) {
                return image;
            }
        });
        // Saves the new state
        setAttributes({
            images:newImages,
        })
    }

    const GalleryStyleControl = withState({
        gallery_style: gallery_style,
    })(({ gallery_style, setState }) => (
        <SelectControl
            label="Select Style"
            value={gallery_style}
            options={[
                { label: 'Style One', value: 'style1' },
                { label: 'Style Two', value: 'style2' },
            ]}
            onChange={(value) => { setAttributes({ gallery_style: value }) }}
        />
    ));

    // Select column
    const GallerySelectColumn = withState( {
        column: columns,
    })(({ column, setState }) => (
        <SelectControl
            label="Select Column"
            value={column}
            options={[
                { label: 'One Column', value: '1' },
                { label: 'Two Column', value: '2' },
                { label: 'Three Column', value: '3' },
                { label: 'Four Column', value: '4' },
            ]}
            onChange={(value) => { setAttributes({ columns: value }) }}
        />
    ));

    // Gallery Padding
    const GalleryContentControl = withState( {
        padding: padding,
    } )( ( { padding, setState } ) => (
        <TextControl
            label="Padding"
            value={ padding }
            onChange={(value) => { setAttributes({ padding: value }) }}
        />
    ) );

    let counts = 0;
    let output = '';

    //Displays the images
    const displayImages = (images) => {
        return (
            images.map( (image) => {

                const paddingStyle = {
                    padding: padding
                }

                if(gallery_style == 'style1') {
                    return (
                        <div className={`col-${columns} gallery-item`} style={paddingStyle}>
                            <img className='gallery-item' src={image.url} key={ images.id } />
                            <div className='remove-item' onClick={() => removeImage(image)}><span class="dashicons dashicons-trash"></span></div>
                        </div>
                    )
                } else {

                    output = (counts == 0) ? (
                        <div className={`col-md-6 full-content style2-wrap`} style={paddingStyle}>
                            <div className="gallery-item">
                                <img className='gallery-item' src={image.url} key={ images.id } />
                                <div className='remove-item' onClick={() => removeImage(image)}><span class="dashicons dashicons-trash"></span></div>
                            </div>
                        </div>
                    ) : (
                        <div className={`col-md-3 gallery-style2`} style={paddingStyle}>
                            <div className="gallery-item">
                                <img className='gallery-item' src={image.url} key={ images.id } />
                                <div className='remove-item' onClick={() => removeImage(image)}><span class="dashicons dashicons-trash"></span></div>
                            </div>
                        </div>
                    );

                    counts++;
                    return output;

                }

            })
        )
    }

    //JSX to return
    return (
        <div>
            <InspectorControls key="inspector">
                <PanelBody title={__('Select Gallery Column')}>
                    <GalleryStyleControl />
                    <GallerySelectColumn />
                    <GalleryContentControl />
                </PanelBody>
            </InspectorControls>

            <div className="gallery-grid">
                {displayImages(images)}
            </div>

            <br/>
            <MediaUpload
                onSelect={(media) => {setAttributes({images: [...images, ...media]});}}
                type="image"
                multiple={true}
                value={images}
                render={({open}) => (
                    <Button className="select-images-button is-button is-default is-large" onClick={open}>
                        Add images
                    </Button>
                )}
            />
        </div>
    );
}
