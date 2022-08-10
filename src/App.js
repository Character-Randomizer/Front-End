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
import Account from './components/account'

import { formSchemaUsers, formSchemaRandom, formSchemaContact, formSchemaLogin } from './validation/formSchema'

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
  confirm_password: '',
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

const initialLoginValues = {
  username: '',
  password: '',
}

const initialCharacters = []
const initialUsers = []
const initialContactForm = []


function App() {
  const [loginValues, setLoginValues] = useState(initialLoginValues)
  const [loginErrors, setLoginErrors] = useState(initialLoginValues)

  const [characters, setCharacters] = useState(initialCharacters)
  const [charFormValues, setCharFormValues] = useState(initialCharValues)
  const [charErrors, setCharErrors] = useState(initialCharValues)

  const [users, setUsers] = useState(initialUsers)
  const [userFormValues, setUserFormValues] = useState(initialUserValues)
  const [userErrors, setUserErrors] = useState(initialUserValues)

  const [contactForm, setContactForm] = useState(initialContactForm)
  const [contactFormValues, setContactFormValues] = useState(initialContactValues)
  const [contactErrors, setContactErrors] = useState(initialContactValues)


  const changeInputUsers = (name, value) => {
    yup
      .reach(formSchemaUsers, name)
      .validate(value)
      .then(() => {
        setUserErrors({ ...userErrors, [name]: '' })
      })
      .catch(err => {
        setUserErrors({ ...userErrors, [name]: err.errors })
      })

    setUserFormValues({ ...userFormValues, [name]: value })
  }

  // Trying to see if making the login it's own special array of objects if that fixes the value [object object] issue
  const changeInputLogin = (name, value) => {
    yup
      .reach(formSchemaLogin, name)
      .validate(value)
      .then(() => {
        setLoginErrors({ ...loginErrors, [name]: '' })
      })
      .catch(err => {
        setLoginErrors({ ...loginErrors, [name]: err.loginErrors })
      })

    setLoginValues({ ...loginValues, [name]: value })
  }

  const changeInputRandomizer = (name, value) => {
    yup
      .reach(formSchemaRandom, name)
      .validate(value)
      .then(() => {
        setCharErrors({ ...charErrors, [name]: '' })
      })
      .catch(err => {
        setCharErrors({ ...charErrors, [name]: err.charErrors })
      })

    setCharFormValues({ ...charFormValues, [name]: value })
  }

  const changeInputContact = (name, value) => {
    yup
      .reach(formSchemaContact, name)
      .validate(value)
      .then(() => {
        setContactErrors({ ...contactErrors, [name]: '' })
      })
      .catch(err => {
        setContactErrors({ ...contactErrors, [name]: err.contactErrors })
      })

    setContactForm({ ...contactForm, [name]: value })
  }

  return (
    <div className="App">

      <Routes>
        <Route path={`/login/signup`} element={<SignUp changeSignup={changeInputUsers} valuesSignup={userFormValues} />} />
        <Route path={`/login`} element={<Login changeLogin={changeInputLogin} valuesLogin={loginValues} />} />
        {/* Below is a path to the account page - I made a component for it, but I will not be working on it unless I have time as a stretch */}
        <Route path={`/account`} element={<Account />} />
        <Route path={`/contact`} element={<Contact changeContact={changeInputContact} valuesContact={contactFormValues} />} />
        <Route path={`/about`} element={<About />} />
        <Route path={`/character-randomizer`} element={<CharRandomizer changeRand={changeInputRandomizer} valuesRand={charFormValues} />} />
        <Route exact path={`/`} element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;
