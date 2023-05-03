import { Create, SimpleForm, TextInput } from 'react-admin';
import {
    CountryRefInput,
    EmployerRefInput,
    SpecialityRefInput,
    ExpirienceRefInput,
    HousingRefInput
} from '../RefInput';

const VacancyCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="title" fullWidth required />
            <TextInput source="description" multiline rows={5} fullWidth required />
            <TextInput source="salary"required/>
            <EmployerRefInput required />
            <CountryRefInput required />
            <SpecialityRefInput required />
            <ExpirienceRefInput required />
            <HousingRefInput required />
        </SimpleForm>
    </Create>
);

export default VacancyCreate;