import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';

import Home from './components/home'
import Login from './components/login'
import SignUp from './components/signup'
import CharRandomizer from './components/charRandom'
import Contact from './components/contact'
import Account from './components/account'

import { formSchemaSignup, formSchemaRandom, formSchemaContact, formSchemaLogin } from './validation/formSchemas'


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
  user_id: '',
  first_name: '',
  last_name: '',
  username: '',
  password: '',
  confirm_password: '',
  email: '',
  terms: false,
  dob: '',
  created_at: '',
  updated_at: null
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
const initialDisabled = true


function App() {
  const [loginValues, setLoginValues] = useState(initialLoginValues)
  const [loginErrors, setLoginErrors] = useState(initialLoginValues)

  const [characters, setCharacters] = useState(initialCharacters)
  const [charFormValues, setCharFormValues] = useState(initialCharValues)
  const [charErrors, setCharErrors] = useState(initialCharValues)

  const [users, setUsers] = useState(initialUsers)

  const [signupFormValues, setSignupFormValues] = useState(initialUserValues)
  const [signupErrors, setSignupErrors] = useState(initialUserValues)

  const [contactForm, setContactForm] = useState(initialContactForm)
  const [contactFormValues, setContactFormValues] = useState(initialContactValues)
  const [contactErrors, setContactErrors] = useState(initialContactValues)

  const [disabled, setDisabled] = useState(initialDisabled)

  //Validation Errors for Login Page - finished:
  const changeInputLogin = (name, value) => {
    yup
      .reach(formSchemaLogin, name)
      .validate(value)
      .then(() => {
        setLoginErrors({ ...loginErrors, [name]: '' })
      })
      .catch(err => {
        setLoginErrors({ ...loginErrors, [name]: err.errors })
      })

    setLoginValues({ ...loginValues, [name]: value })
  }

  useEffect(() => {
    formSchemaLogin.isValid(loginValues).then(validate => {
      setDisabled(!validate)
    })
  }, [loginValues])


  //Validation Errors for Sign Up Page - need to work on:
  const changeInputSignup = (name, value) => {
    yup
      .reach(formSchemaSignup, name)
      .validate(value)
      .then(() => {
        setSignupErrors({ ...signupErrors, [name]: '' })
      })
      .catch(err => {
        setSignupErrors({ ...signupErrors, [name]: err.errors })
      })

    setSignupFormValues({ ...signupFormValues, [name]: value })
  }

  useEffect(() => {
    formSchemaSignup.isValid(signupFormValues).then(validate => {
      setDisabled(!validate)
    })
  }, [signupFormValues])

  //Validation Errors for Randomizer Page - need to work on:
  const changeInputRandomizer = (name, value) => {
    yup
      .reach(formSchemaRandom, name)
      .validate(value)
      .then(() => {
        setCharErrors({ ...charErrors, [name]: '' })
      })
      .catch(err => {
        setCharErrors({ ...charErrors, [name]: err.errors })
      })

    setCharFormValues({ ...charFormValues, [name]: value })
  }

  useEffect(() => {
    formSchemaRandom.isValid(charFormValues).then(validate => {
      setDisabled(!validate)
    })
  }, [charFormValues])

  //Validation Errors for Contact Page - need to work on:
  const changeInputContact = (name, value) => {
    yup
      .reach(formSchemaContact, name)
      .validate(value)
      .then(() => {
        setContactErrors({ ...contactErrors, [name]: '' })
      })
      .catch(err => {
        setContactErrors({ ...contactErrors, [name]: err.errors })
      })

    setContactForm({ ...contactForm, [name]: value })
  }

  useEffect(() => {
    formSchemaContact.isValid(contactFormValues).then(validate => {
      setDisabled(!validate)
    })
  }, [contactFormValues])


  //Posting a new user to the Users api when Signing Up
  const postNewUser = (newUser) => {
    console.log(`PostNewUser - newUser:`, newUser)

    axios
      .get('https://character-randomizer-backend.herokuapp.com/api/auth/register', newUser)
      .then(res => {
        console.log(`Response:`, res)
        setUsers([...users, res.data.user])
      })
      // .finally(setSignupFormValues(initialUserValues))
      .catch(err => {
        console.log(err)
      })
  }

  const submitNewUser = event => {
    event.preventDefault()

    const newUser = {
      user_id: '2',
      first_name: signupFormValues.first_name,
      last_name: signupFormValues.last_name,
      username: signupFormValues.username,
      password: signupFormValues.password,
      confirm_password: signupFormValues.confirm_password,
      email: signupFormValues.email,
      terms: signupFormValues.terms,
      dob: signupFormValues.dob,
      created_at: new Date().toJSON().slice(0, 10),
      updated_at: signupFormValues.updated_at
    }

    postNewUser(newUser)
  }

  return (
    <div className="App">

      <Routes>
        <Route path={`/login/signup`} element={<SignUp changeSignup={changeInputSignup} valuesSignup={signupFormValues} signupErrors={signupErrors} submitNewUser={submitNewUser} />} />

        <Route path={`/login`} element={<Login changeLogin={changeInputLogin} valuesLogin={loginValues} loginErrors={loginErrors} />} />

        {/* Below is a path to the account page - I made a component for it, but I will not be working on it unless I have time as a stretch */}
        <Route path={`/account`} element={<Account />} />

        <Route path={`/contact`} element={<Contact changeContact={changeInputContact} valuesContact={contactFormValues} />} />

        <Route path={`/character-randomizer`} element={<CharRandomizer changeRand={changeInputRandomizer} valuesRand={charFormValues} />} />

        <Route exact path={`/`} element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;
