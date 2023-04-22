import { ReferenceInput, SelectInput } from 'react-admin';

const CountryRefInput = () => {
    return (
        <ReferenceInput reference="country" source="country_id">
            <SelectInput 
                label="Country"
                source="country_id"
                optionText="name"
            />
        </ReferenceInput>
    );
}

export default CountryRefInput;