import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';

const initialCharValues = {
  first_name: '',
  last_name: '',
  level: 1,
  class: '',
  class_focus: '',
  alignment: '',
  race: '',
  physical_description: '',
  strength: 10,
  dexterity: 10,
  consitution: 10,
  intelligence: 10,
  wisdom: 10,
  charisma: 10,
  gender: '',
  height: 5,
  age: 18,
  weight: 165,
  background: ''
}

const initialUserValues = {
  first_name: '',
  last_name: '',
  username: '',
  password: '',
  email: '',
  terms: false,
  dob: 1 / 1 / 1900
}

const initialContactValues = {
  first_name: '',
  last_name: '',
  username: '',
  email: '',
  subject: '',
  message: ''
}

const initialCharacters = []
const initialUsers = []
const initialContactForm = []


function App() {
  const [charFormValues, setCharFormValues] = useState(initialCharValues)
  const [userFormValues, setUseFormValues] = useState(initialUserValues)
  const [contactFormValues, setContactFormValues] = useState(initialContactValues)
  const [characters, setCharacters] = useState(initialCharacters)
  const [users, setUsers] = useState(initialUsers)
  const [contactForm, setContactForm] = useState(initialContactForm)



  return (
    <div className="App">
      <header className="header">
        <h1>Randomized Character Creator</h1>

        <nav>
          <div className='top-btns'>
            <Link to={`/`} id='home link'>
              <div className='home btn'>Home</div>
            </Link>
            <Link to={`/character-randomizer`} id='randomizer link'>
              <div className='randomizer btn'>Randomizer</div>
            </Link>
            <Link to={`/about`} id='about link'>
              <div className='about btn'>About</div>
            </Link>
            <Link to={`/contact`} id='contact link'>
              <div className='contact btn'>Contact</div>
            </Link>
            <Link to={`/login`} id='login link'>
              <div className='login btn'>Login</div>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default App;
