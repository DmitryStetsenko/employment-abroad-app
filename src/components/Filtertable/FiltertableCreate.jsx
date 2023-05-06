import { Create, SimpleForm, TextInput } from 'react-admin';

const FiltertableCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" disabled/>
            <TextInput required source="name"/>
        </SimpleForm>
    </Create>
);

export default FiltertableCreate;