import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './store';

import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={ store }>
		<BrowserRouter>
			<PersistGate loading={null} persistor={ persistor }>
				<App />
			</PersistGate>
		</BrowserRouter>
	</Provider>
);
