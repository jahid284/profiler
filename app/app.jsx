const React = require('react');
const ReactDOM = require('react-dom');
const Main = require('Main');
import {HashRouter as Router,Route,Link} from 'react-router-dom';
import 'style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Main/>,
  document.getElementById('app')
);
