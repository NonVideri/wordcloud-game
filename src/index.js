import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import { ScoreProvider } from './contexts/ScoreContext';

const Style = createGlobalStyle`
  body {
    text-align: center;
    font-family: 'Arial', sans-serif;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Style />
    <ScoreProvider>
      <App />
    </ScoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
