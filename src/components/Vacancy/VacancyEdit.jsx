import { Edit, SimpleForm, TextInput, ReferenceInput, choices } from 'react-admin';

import RecordTitle from '../RecordTitle';

const VacancyEdit = () => (
    <Edit title={<RecordTitle />}>
        <SimpleForm>
            <TextInput source="id" disabled/>
            <TextInput required source="title" fullWidth/>
            <TextInput required source="description" multiline rows={5} fullWidth/>

            <ReferenceInput source="employer_id" reference="employer" required />
            <ReferenceInput source="country_id" reference="country" required />
            <ReferenceInput source="speciality_id" reference="speciality" required />
            <ReferenceInput source="expirience_id" reference="expirience" required />
            <ReferenceInput source="housing_id" reference="housing" required />
        </SimpleForm>
    </Edit>
);

export default VacancyEdit;