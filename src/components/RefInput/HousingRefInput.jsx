import { ReferenceInput, SelectInput } from 'react-admin';

const HousingRefInput = () => {
    return (
        <ReferenceInput reference="housing" source="housing_id">
            <SelectInput 
                label="Housing"
                source="housing_id"
                optionText="name"
            />
        </ReferenceInput>
    );
}

export default HousingRefInput;