import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App'; classic component
import App from './components/app/app';

// ---
import reportWebVitals from './reportWebVitals';

// const elem  = <h2>Hello World PineS</h2>; // element
const someText = 'Kira tiTop';
const elem = ( // всегда должен быть div - обёртка
  <div>
    <h2 htmlFor='asd' className='girl'>Text: {someText}, {1?'meet':'not meet'}</h2>
    <input type='text' />
    <button tabIndex={0}>Clicke me</button>
  </div>
);

// const  newApp = React.createElement('h1', 'bigBoy', 'Hello Kira');
// const  newApp = React.createElement('h1', {className: 'bigGril'}, 'Hello Kira');
// const newApp = {
//   type: "h1",
//   props: {
//     className: 'bigGirl',
//     children: 'Hello Kira'
//   }
// };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    {/* elem */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
