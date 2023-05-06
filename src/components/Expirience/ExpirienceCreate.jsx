import { Create, SimpleForm, TextInput, NumberInput } from 'react-admin';

const ExpirienceCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" disabled/>
            <NumberInput required source="name" fullWidth/>
        </SimpleForm>
    </Create>
);

export default ExpirienceCreate;