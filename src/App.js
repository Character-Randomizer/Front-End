import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import Home from './components/home'
import Login from './components/login'
import SignUp from './components/signup'
import CharRandomizer from './components/charRandom'
import Contact from './components/contact'
import Account from './components/account'
import CreatedCharPage from './components/createdCharPage'

import { formSchemaSignup, formSchemaRandom, formSchemaContact, formSchemaLogin } from './validation/formSchemas'

import axiosWithAuth from './authorization/axiosWithAuth';
import PrivateRoute from './authorization/privateRoutes';


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
  showPass: false,
  showConfirm: false
}

const initialContactValues = {
  first_name: '',
  last_name: '',
  username: '',
  subject: '',
  message: ''
}

const initialLoginValues = {
  username: '',
  password: '',
  showPass: false
}

// const initialCharacters = []
const initialUser = {}
// const initialContactForm = {}
const initialDisabled = true


function App() {
  const [loginValues, setLoginValues] = useState(initialLoginValues)
  const [loginErrors, setLoginErrors] = useState(initialLoginValues)

  // const [characters, setCharacters] = useState(initialCharacters)
  const [charFormValues, setCharFormValues] = useState(initialCharValues)
  const [charErrors, setCharErrors] = useState(initialCharValues)

  const [user, setUser] = useState(initialUser)

  const [signupFormValues, setSignupFormValues] = useState(initialUserValues)
  const [signupErrors, setSignupErrors] = useState(initialUserValues)

  // const [contactForm, setContactForm] = useState(initialContactForm)
  const [contactFormValues, setContactFormValues] = useState(initialContactValues)
  const [contactErrors, setContactErrors] = useState(initialContactValues)

  const [disabled, setDisabled] = useState(initialDisabled)

  const navigate = useNavigate()

  //Validation Errors for Login Page:
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


  //Validation Errors for Sign Up Page:
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

  //Validation Errors for Randomizer Page:
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

  //Validation Errors for Contact Page:
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

    setContactFormValues({ ...contactFormValues, [name]: value })
  }

  useEffect(() => {
    formSchemaContact.isValid(contactFormValues).then(validate => {
      setDisabled(!validate)
    })
  }, [contactFormValues])


  //Logging in the user with backend api:
  const loginUser = user => {
    axiosWithAuth()
      .post(`auth/login`, user)
      .then(res => {
        setUser(res.data.user)
        localStorage.setItem('token', res.data.token)

        if (res.data.message === "Welcome") {
          return (
            navigate(`/${res.data.user.user_id}/created-characters`)
          )
        }

        return user
      })
      .catch((err) => {
        console.log(`Login Error:`, err)

        setLoginErrors({ ...loginErrors, ['request_err']: 'Invalid Credentials, please try again or sign up' })
      })
      //Do I need this?
      .finally(setLoginValues(initialLoginValues))
  }

  const loginSubmit = event => {
    event.preventDefault()

    const user = {
      username: loginValues.username,
      password: loginValues.password
    }

    loginUser(user)
  }


  //Posting a new user to the user api when Signing Up
  const registerNewUser = (newUser) => {
    axiosWithAuth()
      .post('auth/register', newUser)
      .then(res => {
        setUser(res.data.user)
        localStorage.setItem('token', res.data.token)

        navigate(`/${res.data.user.user_id}/created-characters`)

        return user
      })
      .catch(err => {
        console.log(err)

        setSignupErrors({ ...signupErrors, ['request_err']: "You must complete all required fields before submitting" })
      })
      .finally(setSignupFormValues(initialUserValues))
  }

  const submitNewUser = event => {
    event.preventDefault()

    const newUser = {
      first_name: signupFormValues.first_name,
      last_name: signupFormValues.last_name,
      username: signupFormValues.username,
      password: signupFormValues.password,
      email: signupFormValues.email,
      accepted_terms: signupFormValues.terms,
      dob: signupFormValues.dob,
    }

    registerNewUser(newUser)
  }


  // //For "blurring" out the passwords for login/sign up pages:
  const handleShowPassLogin = () => {
    setLoginValues({ ...loginValues, showPass: !loginValues.showPass })
  }

  const handleShowPassSignup = () => {
    setSignupFormValues({ ...signupFormValues, showPass: !signupFormValues.showPass })
  }

  const handleShowConfirmPassSignup = () => {
    setSignupFormValues({ ...signupFormValues, showConfirm: !signupFormValues.showConfirm })
  }

  return (
    <div className="App">

      <Routes>
        <Route path={`/signup`}
          element={<SignUp
            changeSignup={changeInputSignup}
            valuesSignup={signupFormValues}
            signupErrors={signupErrors}
            submitNewUser={submitNewUser}
            handleShowPass={handleShowPassSignup}
            handleShowConfirm={handleShowConfirmPassSignup}
            user={user}
          />} />

        <Route path={`/login`}
          element={<Login
            changeLogin={changeInputLogin}
            valuesLogin={loginValues}
            loginErrors={loginErrors}
            submitLogin={loginSubmit}
            handleShowPass={handleShowPassLogin}
            user={user}
          />} />

        {/* Private Routes for account and created character pages - can only access if the user has a login and is logged in */}
        <Route element={<PrivateRoute />}>
          {/* Below is a path to the account page - I made a component for it, but I will not be working on it unless I have time as a stretch */}
          <Route path={`/account`}
            element={
              <Account
                user={user} />
            } />

          {/* Below is a path to the created character(s) page - I made a component for it, but I will not be working on it unless I have time as a stretch */}
          < Route path={`/:user_id/created-characters`}
            element={
              <CreatedCharPage
                user={user} />
            } />

        </Route>

        <Route path={`/contact`}
          element={<Contact
            changeContact={changeInputContact}
            valuesContact={contactFormValues}
            contactErrors={contactErrors}
            user={user} />} />

        <Route path={`/character-randomizer`}
          element={<CharRandomizer
            changeRand={changeInputRandomizer}
            valuesRand={charFormValues}
            user={user} />} />

        <Route exact path={`/`} element={<Home user={user} />} />
      </Routes>

    </div>
  );
}

export default App;
