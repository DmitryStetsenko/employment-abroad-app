import { Edit, SimpleForm, TextInput } from 'react-admin';

import RecordTitle from '../RecordTitle';

const CountryEdit = () => (
    <Edit title={<RecordTitle />}>
        <SimpleForm>
            <TextInput source="id" disabled/>
            <TextInput source="name" fullWidth/>
        </SimpleForm>
    </Edit>
);

export default CountryEdit;