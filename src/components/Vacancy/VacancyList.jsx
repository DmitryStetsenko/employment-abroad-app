import React from 'react';
import { Datagrid, DateField, EditButton, List, ReferenceField, ReferenceInput, TextField } from 'react-admin';

const vacancyFilters = [
  // <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="employer_id" label="Employer" reference="employer"></ReferenceInput>,
];

const VacancyList = () => {
  return (
    <List filters={vacancyFilters}>
      <Datagrid rowClick="expand">
            <TextField source="id" />
            <TextField source="title" />
            {/* <TextField source="description" /> */}
            <DateField source="created" />

            <ReferenceField source="speciality_id" reference="speciality" />
            <ReferenceField source="country_id" reference="country" />
            <ReferenceField source="housing_id" reference="housing" />
            <ReferenceField source="employer_id" reference="employer" />

            <EditButton />
          </Datagrid>
    </List>
  );
};

export default VacancyList;