import { Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

import RecordTitle from '../RecordTitle';

const ExpirienceEdit = () => (
    <Edit title={<RecordTitle />}>
        <SimpleForm>
            <TextInput source="id" disabled/>
            <NumberInput required source="name" fullWidth/>
        </SimpleForm>
    </Edit>
);

export default ExpirienceEdit;