/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
 import { __ } from '@wordpress/i18n';

 /**
  * React hook that is used to mark the block wrapper element.
  * It provides all the necessary props like the class name.
  *
  * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
  */
  import { useBlockProps,RichText } from '@wordpress/block-editor';
  import Productapi_Memo from './productapi';
 /**
  * The save function defines the way in which the different attributes should
  * be combined into the final markup, which is then serialized by the block
  * editor into `post_content`.
  *
  * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
  *
  * @return {WPElement} Element to render.
  */
 export default function save(props) {
    const blockProps = useBlockProps.save();


    // const {
    //     thmap,
    //     height,
    //     width
    //   } = attributes;
{/* <div {...blockProps}>
      <Productapi_Memo count="4" />
      <p>hello frinds</p>
     </div */}
     return (null);
 }
 