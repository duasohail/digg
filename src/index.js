import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch,Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Form1 from "./components/Form1_dsktp";
import Form2 from './components/formStep2';
import Form3 from './components/formstep3';
import Form4 from './components/formstep4';
import Form5 from './components/formstep5';

ReactDOM.render(

  <BrowserRouter>
  <switch>
  <Route exact path="/" component={Form1} />
  <Route path="/form2" component={Form2} />
  <Route path="/form3" component={Form3} />
  <Route path="/form4" component={Form4} />
  <Route path="/form5" component={Form5} />
</switch>
  </BrowserRouter>
  
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
