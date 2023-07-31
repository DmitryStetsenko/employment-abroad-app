import React from 'react';
import { Datagrid, List, TextField } from 'react-admin';

const CurrencyList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="short" />
            <TextField source="symbol" />
          </Datagrid>
    </List>
  );
};

export default CurrencyList;