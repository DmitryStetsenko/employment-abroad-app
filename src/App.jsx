import { Routes, Route } from 'react-router-dom';

import { Employer, Worker, Account, Vacancy, Notfound } from './componets/pages';
import Layout from './componets/Layout';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={ <Layout />}>
					<Route index element={ <Worker /> }/>
					<Route path="/employer" element={ <Employer /> }/>
					<Route path="/account" element={ <Account /> }/>
					<Route path="/vacancy" element={ <Vacancy /> }/>
					<Route path="*" element={ <Notfound /> }/>
				</Route>
			</Routes>
		</>
	);
}

export default App;
