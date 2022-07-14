import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Register from './components/Register';
import Profile from './components/Profile';
import SocialShare from './components/SocialShare';
import App from './App';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RecoilRoot>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="register" element={<Register />} />
                <Route path="profile" element={<Profile />} />
                <Route path="ss" element={<SocialShare />} />
            </Routes>
        </BrowserRouter>
    </RecoilRoot>
);