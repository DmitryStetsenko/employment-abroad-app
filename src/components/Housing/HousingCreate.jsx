import { Create, SimpleForm, TextInput } from 'react-admin';

const HousingCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" disabled/>
            <TextInput source="name" fullWidth/>
        </SimpleForm>
    </Create>
);

export default HousingCreate;