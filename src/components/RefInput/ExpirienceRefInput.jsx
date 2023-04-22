import { ReferenceInput, SelectInput } from 'react-admin';

const ExpirienceRefInput = () => {
    return (
        <ReferenceInput reference="expirience" source="expirience_id">
            <SelectInput 
                label="Expirience"
                source="expirience_id"
                optionText="name"
            />
        </ReferenceInput>
    );
}

export default ExpirienceRefInput;