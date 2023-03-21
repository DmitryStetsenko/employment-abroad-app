import './App.css';
import { Routes, Route } from 'react-router-dom';

import { 
	EmployerPage, WorkerPage, AccountPage, VacancyPage, NotfoundPage
} from './pages';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={ <WorkerPage /> }/>
				<Route path="/employer" element={ <EmployerPage /> }/>
				<Route path="/account" element={ <AccountPage /> }/>
				<Route path="/vacancy" element={ <VacancyPage /> }/>
				<Route path="*" element={ <NotfoundPage /> }/>
			</Routes>
		</>
	);
}

export default App;
