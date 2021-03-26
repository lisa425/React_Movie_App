import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Potato from './potato';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//<App /> = component = HTML 반환 함수 , 1개의 컴포너트만 가능
