import { Routes, Route } from 'react-router-dom';

import { 
	EmployerPage, 
	WorkerPage, 
	ContactsPage,
	AboutPage,
	NotfoundPage, 
	VacanciesPage,
	VacancyPage,
} from './componets/pages';

import { 
	AccountPage, 
	AccountWorkerPage,
	AccountEmployerPage, 
} from './componets/pages/Account';

import Layout from './componets/Layout';

function App() {
	
	return (
		<>
			<Routes>
				<Route path="/" element={ <Layout />}>
					<Route index element={ <WorkerPage /> }/>
					<Route path="employer" element={ <EmployerPage /> }/>
					<Route path="vacancies" element={ <VacanciesPage /> } />
					<Route path="vacancies/:table/:name" element={ <VacanciesPage /> } />
					<Route path="vacancy/*" element={ <VacancyPage /> }/>
					<Route path="contacts" element={ <ContactsPage /> }/>
					<Route path="about" element={ <AboutPage/> }/>
					<Route path="account/*" element={ <AccountPage /> }>
						<Route index element={ <AccountWorkerPage /> }/>
						<Route path="employer" element={ <AccountEmployerPage /> }/>
					</Route>
					
					<Route path="*" element={ <NotfoundPage /> }/>
				</Route>
			</Routes>
		</>
	);
}

export default App;
