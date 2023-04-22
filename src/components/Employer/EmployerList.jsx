import React from 'react';
import { Datagrid, DateField, EditButton, FileField, List, ReferenceField, ReferenceInput, TextField, TextInput } from 'react-admin';

const EmployerList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />

            <ReferenceField source="country_id" reference="country" />
            
            <ReferenceField label="Login" source="user_id" reference="user">
              <TextField source="login" />
            </ReferenceField>

            <ReferenceField label="Email" source="user_id" reference="user">
              <TextField source="email" />
            </ReferenceField>
          </Datagrid>
    </List>
  );
};

export default EmployerList;