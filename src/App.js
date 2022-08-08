import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';

import Home from './components/home'
import About from './components/about'
import Login from './components/login'
import SignUp from './components/signup'
import CharRandomizer from './components/charRandom'
import Contact from './components/contact'

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

      <Routes>
        <Route path={`/login/signup`} element={<SignUp />} />
        <Route path={`/login`} element={<Login />} />
        <Route path={`/contact`} element={<Contact />} />
        <Route path={`/about`} element={<About />} />
        <Route path={`/character-randomizer`} element={<CharRandomizer />} />
        <Route exact path={`/`} element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;
