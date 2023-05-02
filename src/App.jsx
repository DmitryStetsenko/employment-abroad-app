import { Routes, Route } from 'react-router-dom';

import { 
	EmployerPage, 
	WorkerPage, 
	AccountPage, 
	ContactsPage,
	AboutPage,
	NotfoundPage, 
	VacanciesPage,
	VacancyPage,
} from './componets/pages';
import Layout from './componets/Layout';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={ <Layout />}>
					<Route index element={ <WorkerPage /> }/>
					<Route path="/employer" element={ <EmployerPage /> }/>
					<Route path="vacancies/:table/:name" element={ <VacanciesPage /> } />
					<Route path="vacancy/*" element={ <VacancyPage /> }/>
					<Route path="/contacts" element={ <ContactsPage /> }/>
					<Route path="/about" element={ <AboutPage/> }/>
					<Route path="/account" element={ <AccountPage /> }/>
					<Route path="*" element={ <NotfoundPage /> }/>
				</Route>
			</Routes>
		</>
	);
}

export default App;
