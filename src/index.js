import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './tic-tac-toc/TicTacToc.css'
import App from './App';
import TicTacToc from './tic-tac-toc/TicTacToc';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    /* StrictMode는 애플리케이션 내의 잠재적인 문제를 알아내기 위한 도구입니다. Fragment와 같이 UI를 렌더링하지 않으며, 자손들에 대한 부가적인 검사와 경고를 활성화합니다. */
    <React.StrictMode>
        <App/>
        <TicTacToc/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
