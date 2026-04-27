import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import Home from './components/Home';
import FetchingData from "./components/FetchingData.tsx";
import ProductDetails from "./components/ProductDetails.tsx";

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<App />}>
                    <Route index element={<Home />} />
                    <Route path={'products'} element={<FetchingData />}>
                        <Route path={':id'} element={<ProductDetails />}></Route>
                    </Route>
                    <Route path={'*'} element={<div>Route not Found</div>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
