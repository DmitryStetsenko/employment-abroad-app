import React from 'react';
import { Datagrid, List, ReferenceField, TextField } from 'react-admin';

const FilterList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
            <TextField source="name" />
            <ReferenceField source="filtertable_id" reference="filtertable" required />
            <TextField source="available" />
          </Datagrid>
    </List>
  );
};

export default FilterList;