import React from 'react';
import { Datagrid, List, TextField } from 'react-admin';

const CountryList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
          </Datagrid>
    </List>
  );
};

export default CountryList;