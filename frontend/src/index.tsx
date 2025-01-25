// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from "./router.tsx";

document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.boxSizing = 'border-box';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AppRouter />
    </React.StrictMode>,
);