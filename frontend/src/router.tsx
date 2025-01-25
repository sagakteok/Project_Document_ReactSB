// AppRouter.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainHome from './pages/MainHome';
import AllDocuments from './pages/AllDocuments';
import Businesses from "./pages/Businesses.tsx";
import TownCommunity from "./pages/TownCommunity.tsx";
import MyDocuments from "./pages/MyDocuments.tsx";

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainHome />} />
                <Route path="/AllDocuments" element={<AllDocuments />} />
                <Route path="/businesses" element={<Businesses />} />
                <Route path="/TownCommunity" element={<TownCommunity />} />
                <Route path="/MyDocuments" element={<MyDocuments />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;