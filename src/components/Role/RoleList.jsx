import React from 'react';
import { Datagrid, List, TextField } from 'react-admin';

const RoleList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
          </Datagrid>
    </List>
  );
};

export default RoleList;