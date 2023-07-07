import { Edit, SimpleForm, TextInput, ReferenceInput, choices, FileInput, ImageInput, ImageField } from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';

import RecordTitle from '../RecordTitle';
import { LanguageRefInput } from '../RefInput';
import ImageUpload from '../ImageUpload/ImageUpload';

const VacancyEdit = () => (
    <Edit title={<RecordTitle />}>
        <SimpleForm>
            <TextInput source="id" disabled/>
            <TextInput required source="title" fullWidth/>
            <RichTextInput required source="description" multiline rows={5} fullWidth/>
            <ImageUpload />
            {/* <ImageInput
                source="thumbnails"
                accept="image/*"
                multiple={false}
                placeholder={<p>Move image here. Max size 500kb</p>}
                required 
                maxSize={ 500000 }
            >
                <ImageField source="src" title="title" />
            </ImageInput> */}
            <TextInput source="additionally" fullWidth/>

            <ReferenceInput source="employer_id" reference="employer" required />
            <ReferenceInput source="speciality_id" reference="speciality" required />
            <LanguageRefInput />
            {/* <ReferenceInput source="language_id" reference="language" required /> */}
            <ReferenceInput source="country_id" reference="country" required />
            <ReferenceInput source="expirience_id" reference="expirience" required />
            <ReferenceInput source="housing_id" reference="housing" required />
        </SimpleForm>
    </Edit>
);

export default VacancyEdit;