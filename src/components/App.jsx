import React from 'react';
import { BrowserRouter, Routes, Route, Router, useLocation } from 'react-router-dom';
import './app.less';
import { Main } from './main/Main';

export const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}
