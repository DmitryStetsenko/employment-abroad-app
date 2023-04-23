import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { 
	Employer, 
	Worker, 
	Account, 
	Contacts,
	About,
	Notfound 
} from './componets/pages';
import Layout from './componets/Layout';

function App() {
	useEffect(() => {

	});

	return (
		<>
			<Routes>
				<Route path="/" element={ <Layout />}>
					<Route index element={ <Worker /> }/>
					<Route path="/employer" element={ <Employer /> }/>
					<Route path="/contacts" element={ <Contacts /> }/>
					<Route path="/about" element={ <About/> }/>
					<Route path="/account" element={ <Account /> }/>
					<Route path="*" element={ <Notfound /> }/>
				</Route>
			</Routes>
		</>
	);
}

export default App;
