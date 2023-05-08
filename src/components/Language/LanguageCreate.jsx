import { Create, SimpleForm, TextInput } from 'react-admin';

const LanguageCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" disabled/>
            <TextInput required source="name"/>
            <TextInput required source="level"/>
        </SimpleForm>
    </Create>
);

export default LanguageCreate;