import { Edit, SimpleForm, TextInput } from 'react-admin';
import {
    CountryRefInput,
    EmployerRefInput,
    SpecialityRefInput,
    ExpirienceRefInput,
    HousingRefInput
} from '../RefInput';

import RecordTitle from '../RecordTitle';

const VacancyEdit = () => (
    <Edit title={<RecordTitle />}>
        <SimpleForm>
            <TextInput source="id" disabled/>
            <TextInput source="title" fullWidth/>
            <TextInput source="description" multiline rows={5} fullWidth/>
            <EmployerRefInput />
            <CountryRefInput />
            <SpecialityRefInput />
            <ExpirienceRefInput />
            <HousingRefInput />
        </SimpleForm>
    </Edit>
);

export default VacancyEdit;