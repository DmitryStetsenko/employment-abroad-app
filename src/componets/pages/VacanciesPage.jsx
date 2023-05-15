import { useParams, useLocation } from 'react-router-dom';
import WorkerPage from "./WorkerPage";

const VacanciesPage = () => {
	const { table } = useParams();
	const { state } = useLocation();
	
	if (!state) {
		return <WorkerPage filter={ { table: 'vacancy' }} />
	}

	return <WorkerPage filter={ { table, id: state }}/>
};

export default VacanciesPage;
