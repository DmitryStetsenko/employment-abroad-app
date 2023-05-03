import { Create, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

const FilterCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" disabled/>
            <TextInput source="name" required/>
            <ReferenceInput source="filtertable_id" reference="filtertable" required />
        </SimpleForm>
    </Create>
);

export default FilterCreate;