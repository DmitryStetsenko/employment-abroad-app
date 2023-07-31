import { Create, SimpleForm, TextInput } from 'react-admin';

const CurrencyCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" disabled/>
            <TextInput required source="name"/>
            <TextInput required source="short"/>
            <TextInput required source="symbol"/>
        </SimpleForm>
    </Create>
);

export default CurrencyCreate;