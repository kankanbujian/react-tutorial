import './index.less';
// import React from 'react';
import ASReact from './react/index';
// import ReactDom from 'react-dom';
import ReactDom from './react-dom/index';
/** @jsx ASReact.createElement */
const jsx = <div className='text'><h1>react-tutorial</h1></div>
console.log('jsx', jsx);
ReactDom.render(jsx, document.getElementById('root'));