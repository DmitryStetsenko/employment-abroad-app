import { Edit, SimpleForm, TextInput } from 'react-admin';

import RecordTitle from '../RecordTitle';

const LanguageEdit = () => (
    <Edit title={<RecordTitle />}>
        <SimpleForm>
            <TextInput source="id" disabled/>
            <TextInput required source="name"/>
            <TextInput required source="level"/>
        </SimpleForm>
    </Edit>
);

export default LanguageEdit;