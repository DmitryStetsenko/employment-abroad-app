import { Create, SimpleForm, TextInput } from 'react-admin';

const CountryCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" disabled/>
            <TextInput source="name" fullWidth/>
        </SimpleForm>
    </Create>
);

export default CountryCreate;