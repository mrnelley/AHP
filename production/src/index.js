import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD7LldyiohkeYBtuJLoXldha9zIN6ehMs4",
  authDomain: "ah-product.firebaseapp.com",
  projectId: "ah-product",
  storageBucket: "ah-product.appspot.com",
  messagingSenderId: "973290864704",
  appId: "1:973290864704:web:25ccc0216d55cc3d051fa5",
  measurementId: "G-38RLEW43J3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
