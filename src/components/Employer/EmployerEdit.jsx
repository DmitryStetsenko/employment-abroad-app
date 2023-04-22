import { Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

import RecordTitle from '../RecordTitle';

const EmployerEdit = () => (
    <Edit title={<RecordTitle />}>
        <SimpleForm>
            <TextInput source="id" disabled/>
            <TextInput source="name" fullWidth required/>
            <ReferenceInput source="country_id" reference="country" required />
        </SimpleForm>
    </Edit>
);

export default EmployerEdit;