import logo from './logo.svg';
import React from 'react';
import './App.css';

const styleTextWhite = {color:'white'}
const Header = () => {
  return <h2 style={styleTextWhite}>Hello Kira</h2>
}

const Field = () => {
  const holder = 'Some text';
  const styleInput = {
    width: "200px",
    height: "10px",
    background: 'grey',
    border: 'none',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '15px',
    color: 'white',
  }
  return (
    <div>
      <p style={styleTextWhite}>titTop</p>
      <input type='text' placeholder={holder} style={styleInput}/>
    </div>
  )
}

function Btn() {
  const text = 'Log in';
  const res = () => {
    return 'Enter';
  }
  const logged = true;
  return <button>{logged?res():text}</button>
}

class Footer extends React.Component {
  render() {
    // some acts
    const styleFooter = {
      marginTop: '15px',
      ...styleTextWhite
    }
    return <footer style={styleFooter}>GoodBye</footer>
  }
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
      <Btn/>
      <Footer/>
    </div>
  );
}

export default App;
