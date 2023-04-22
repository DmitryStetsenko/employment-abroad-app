import { Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';
import RecordTitle from '../RecordTitle';

const UserEdit = () => (
    <Edit title={<RecordTitle />}>
        <SimpleForm>
            <TextInput source="id" disabled/>
            <TextInput source="login" required />
            <TextInput source="password" required />
            <TextInput source="email" required />
            <TextInput source="phone" required />

            <ReferenceInput source="role_id" reference="role" required />
        </SimpleForm>
    </Edit>
);

export default UserEdit;