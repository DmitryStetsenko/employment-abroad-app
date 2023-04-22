import { Create, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

const EmployerCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" disabled/>
            <TextInput source="name" fullWidth required/>
            <ReferenceInput source="country_id" reference="country" required />
            <ReferenceInput source="role_id" reference="role" required />

            <ReferenceInput source="user_id" reference="user" required>
                <TextInput source="login" />
            </ReferenceInput>

            <ReferenceInput source="user_id" reference="user" required>
                <TextInput source="password" />
            </ReferenceInput>

            <ReferenceInput source="user_id" reference="user" required>
                <TextInput source="email" />
            </ReferenceInput>

            <ReferenceInput source="user_id" reference="user" required>
                <TextInput source="phone" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);

export default EmployerCreate;