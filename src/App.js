import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';

import Home from './components/home'
import About from './components/about'
import Login from './components/login'
import SignUp from './components/signup'
import CharRandomizer from './components/charRandom'
import Contact from './components/contact'

import formSchema from './validation/formSchema'

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
  const [userFormValues, setUserFormValues] = useState(initialUserValues)
  const [contactFormValues, setContactFormValues] = useState(initialContactValues)
  const [characters, setCharacters] = useState(initialCharacters)
  const [users, setUsers] = useState(initialUsers)
  const [contactForm, setContactForm] = useState(initialContactForm)

  // Cannot use the code below b/c need to set up form schema's for users, randomizer, and contact form + the error useStates
  // const changeInputUsers = (name, value) => {
  //   yup
  //     .reach(formSchemaUsers, name)
  //     .validate(value)
  //     .then(() => {
  //       setErrorsUsers({ ...errors, [name]: '' })
  //     })
  //     .catch(err => {
  //       setErrorsUsers({ ...errors, [name]: err.errors })
  //     })

  //   setUserFormValues(...userFormValues, [name]: value)
  // }

  // const changeInputRandomizer = (name, value) => {
  //   yup
  //     .reach(formSchemaRandom, name)
  //     .validate(value)
  //     .then(() => {
  //       setErrorsChar({ ...errors, [name]: '' })
  //     })
  //     .catch(err => {
  //       setErrorsChar({ ...errors, [name]: err.errors })
  //     })

  //   setCharFormValues(...charFormValues, [name]: value)
  // }

  // const changeInputContact = (name, value) => {
  //   yup
  //     .reach(formSchemaContact, name)
  //     .validate(value)
  //     .then(() => {
  //       setErrorsContact({ ...errors, [name]: '' })
  //     })
  //     .catch(err => {
  //       setErrorsContact({ ...errors, [name]: err.errors })
  //     })

  //   setContactForm(...contactForm, [name]: value)
  // }

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
