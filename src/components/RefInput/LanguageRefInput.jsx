import { ReferenceInput, SelectInput, useGetList } from 'react-admin';

const LanguageRefInput = () => {
    const { data } = useGetList("language", {}, { field: "name", order: "ASC" });

    console.log(data);

    const getOptionText = record => `${record.name} ${record.level}`;

    return (
        <ReferenceInput reference="language" source="language_id" choices={ data }>
            <SelectInput
                label="Language"
                source="language_id"
                optionText={ getOptionText }
                choices={data}
            />
        </ReferenceInput>
    );
}

export default LanguageRefInput;