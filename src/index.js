// Hooks
import React from 'react';
import ReactDOM from 'react-dom/client';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

// Store
import store from './store/index';

// Components
import App from './App';

// Styles
import './index.css';

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Provider store={ store }>
			<PersistGate loading={ null } persistor={ persistor }>
				<App />
			</PersistGate>
		</Provider>
	</BrowserRouter>
);