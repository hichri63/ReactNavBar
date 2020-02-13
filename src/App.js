import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './NavBar';
let list = [
  {
    text: 'Home',
    link: '#',
    active: true,
  },
  {
    text: 'services',
    link: '#',
    active: false,
    submit: ["for enterpreneur"," for student", "for hobyistes"]
  },
  {
    text: 'contact',
    link: '#',
    active: false,
  },
]

function App() {
  return (
    <ul className='navbar'>
      {list.map(el => <Nav info={el} />)}
    </ul>
  );
}

export default App;
