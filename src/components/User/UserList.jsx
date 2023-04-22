import React from 'react';
import { Datagrid, DateField, EditButton, EmailField, List, ReferenceField, ReferenceInput, TextField } from 'react-admin';

const userFilters = [
  <ReferenceInput source="role_id" label="Role" reference="role"></ReferenceInput>,
];

const UserList = () => {
  return (
    <List filters={userFilters}>
      <Datagrid>
            <TextField source="id" />
            <TextField source="login" />
            <TextField source="password" />
            <EmailField source="email" />
            <TextField source="phone" />

            <ReferenceField source="role_id" reference="role" />
            
            <DateField source="created" />

            <EditButton />
          </Datagrid>
    </List>
  );
};

export default UserList;