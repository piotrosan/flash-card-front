import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogInForm from "./components/Log_In_Out/LogIn";
import {ProtectedRoute} from "./components/Log_In_Out/ProtectedRoute";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <Router>
          <Routes>
              <Route path="/login" element={<LogInForm />} />
              <Route element={<ProtectedRoute />}>
                  <Route path="/" element={<App />} />
                  {/*<Route path="/" element={<App />} />*/}
              </Route>
              {/* Add public routes here */}
          </Routes>
      </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
