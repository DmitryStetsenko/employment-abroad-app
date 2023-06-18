import { Create, ImageInput, ReferenceInput, SimpleForm, TextInput } from 'react-admin';
import { LanguageRefInput } from '../RefInput';
import { RichTextInput } from 'ra-input-rich-text';

const VacancyCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="title" fullWidth required />
            <RichTextInput source="description" multiline rows={5} fullWidth required />
            <TextInput source="additionally" fullWidth/>
            <ImageInput source="thumbnails" />
            <TextInput source="salary"required/>

            <ReferenceInput source="employer_id" reference="employer" required />
            <ReferenceInput source="speciality_id" reference="speciality" required />

            <LanguageRefInput />
            {/* <ReferenceInput source="language_id" reference="language" required /> */}
            <ReferenceInput source="country_id" reference="country" required />
            <ReferenceInput source="expirience_id" reference="expirience" required />
            <ReferenceInput source="housing_id" reference="housing" required />
        </SimpleForm>
    </Create>
);

export default VacancyCreate;