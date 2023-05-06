import { Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

import RecordTitle from '../RecordTitle';

const FilterEdit = () => (
    <Edit title={<RecordTitle />}>
        <SimpleForm>
            <TextInput source="id" disabled/>
            <TextInput required source="name" />
            <ReferenceInput source="filtertable_id" reference="filtertable" required />
            <TextInput required source="available" />
        </SimpleForm>
    </Edit>
);

export default FilterEdit;