import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import { HelmetProvider } from 'react-helmet-async';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/main.scss';

const element = document.getElementById('root');
const root = createRoot(element);

root.render(
	<HelmetProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</HelmetProvider>
);