import React from 'react';
import ReactDOM from 'react-dom';
import {Routes} from './routes'
import {QuestionsContextProvider} from './Context/questionsContext'



import './styles/global.css';


ReactDOM.render(
  <React.StrictMode>
    <QuestionsContextProvider>
      <Routes />
    </QuestionsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
