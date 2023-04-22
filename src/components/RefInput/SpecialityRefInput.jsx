import { ReferenceInput, SelectInput } from 'react-admin';

const SpecialityRefInput = () => {
    return (
        <ReferenceInput reference="speciality" source="speciality_id">
            <SelectInput 
                label="Speciality"
                source="speciality_id"
                optionText="name"
            />
        </ReferenceInput>
    );
}

export default SpecialityRefInput;