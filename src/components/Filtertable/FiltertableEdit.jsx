import { Edit, SimpleForm, TextInput } from 'react-admin';

import RecordTitle from '../RecordTitle';

const FilterEdit = () => (
    <Edit title={<RecordTitle />}>
        <SimpleForm>
            <TextInput source="id" disabled/>
            <TextInput required source="name" />
        </SimpleForm>
    </Edit>
);

export default FilterEdit;