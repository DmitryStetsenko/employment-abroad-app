import { ImageInput, ImageField } from 'react-admin';

const ImageUpload = () => (
  <ImageInput
    source="thumbnails"
    accept="image/*"
    multiple={false}
    placeholder={<p>Move image here. Max size 500kb</p>}
  >
    <ImageField source="src" src="src" title="title" />
  </ImageInput>
);

export default ImageUpload;