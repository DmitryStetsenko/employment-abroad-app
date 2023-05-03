import { Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

import RecordTitle from '../RecordTitle';

const FilterEdit = () => (
    <Edit title={<RecordTitle />}>
        <SimpleForm>
            <TextInput source="id" disabled/>
            <TextInput source="name" />
            <ReferenceInput source="filtertable_id" reference="filtertable" required />
            <TextInput source="available" />
        </SimpleForm>
    </Edit>
);

export default FilterEdit;