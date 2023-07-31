import { Edit, SimpleForm, TextInput } from 'react-admin';

import RecordTitle from '../RecordTitle';

const CurrencyEdit = () => (
    <Edit title={<RecordTitle />}>
        <SimpleForm>
            <TextInput source="id" disabled/>
            <TextInput required source="name"/>
            <TextInput required source="short"/>
            <TextInput required source="symbol"/>
        </SimpleForm>
    </Edit>
);

export default CurrencyEdit;