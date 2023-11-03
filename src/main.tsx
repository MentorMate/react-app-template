import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { App } from '@features/App/App';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
