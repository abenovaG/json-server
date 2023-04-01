import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {AppProvider} from "./providers/AppProvider/AppProvider";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {ErrorBoundary} from "./providers/ErrorBoundary/ErrorBaundary";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ErrorBoundary>
        <AppProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </AppProvider>
    </ErrorBoundary>
);
