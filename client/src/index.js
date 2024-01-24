import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProductPage } from './Pages/ProductPage';
import { ChatPage } from './Pages/ChatPage';
import { LoginPage } from './Pages/LoginPage';
import { SignupPage } from './Pages/SignupPage';
import { Addad } from './Pages/AddAd';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/LoginPage" element={<LoginPage/>} />
        <Route path="/AddAd" element={<Addad/>} />
        <Route path="/SignupPage" element={<SignupPage/>} />
        <Route path="/ChatPage" element={<ChatPage/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
