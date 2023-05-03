import React from 'react';
import { Datagrid, List, ReferenceField, TextField } from 'react-admin';

const FiltertableList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="name" />
      </Datagrid>
    </List>
  );
};

export default FiltertableList;