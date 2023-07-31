import { Create, ReferenceInput, SimpleForm, TextInput } from 'react-admin';
import { LanguageRefInput } from '../RefInput';
import { RichTextInput } from 'ra-input-rich-text';
import ImageUpload from '../ImageUpload/ImageUpload';

const VacancyCreate = () => (
	<Create>
		<SimpleForm>
			<TextInput source="title" fullWidth required />
			<RichTextInput source="description" multiline rows={5} fullWidth required />
			<TextInput source="additionally" fullWidth />
			
			<TextInput source="salary" required />
			<RichTextInput source="salaryinfo" multiline rows={5} fullWidth />
			<ReferenceInput source="currency_id" reference="currency" required />
			
			<ImageUpload />
			<TextInput source="video" fullWidth />
			
			<ReferenceInput source="employer_id" reference="employer" required />
			<ReferenceInput source="speciality_id" reference="speciality" required />
			<LanguageRefInput />
			<ReferenceInput source="country_id" reference="country" required />
			<ReferenceInput source="expirience_id" reference="expirience" required />
			<ReferenceInput source="housing_id" reference="housing" required />
		</SimpleForm>
	</Create>
);

export default VacancyCreate;