import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>,
    document.body.appendChild(document.createElement('div'))
  );
});
