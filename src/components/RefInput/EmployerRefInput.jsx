import { ReferenceInput, SelectInput } from 'react-admin';

const EmployerRefInput = () => {
    return (
        <ReferenceInput reference="employer" source="employer_id">
            <SelectInput 
                label="Employer"
                source="company_id"
                optionText="name"
            />
        </ReferenceInput>
    );
}

export default EmployerRefInput;