//Library + css imports
import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import * as yup from 'yup';

//Components
import Home from './components/home'
import Login from './components/login'
import SignUp from './components/signup'
import CharRandomizer from './components/charRandom'
import Contact from './components/contact'
import Account from './components/account'
import CreatedCharPage from './components/createdCharPage'

//Form Validation
import { formSchemaSignup, formSchemaRandomizer, formSchemaContact, formSchemaLogin, formSchemaAccount } from './validation/formSchemas'

//Authorization
import axiosWithAuth from './authorization/axiosWithAuth';
import PrivateRoute from './authorization/privateRoutes';

//State Management - Context API
import { UserContext } from './contextAPI';
import axios from 'axios';

//Initial Variables
const initialRandomizerValues = {
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

export const initialSignupValues = {
  first_name: '',
  last_name: '',
  username: '',
  password: '',
  confirm_password: '',
  dob: '',
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

//intialCharacters will probably be needed later on when I implement JSX in createdCharPage for the user's created characters
const initialCharacters = []
const initialUser = {}
const initialDisabled = true


function App() {
  const [user, setUser] = useState(initialUser)

  //Form Values + Error States
  const [loginValues, setLoginValues] = useState(initialLoginValues)
  const [loginErrors, setLoginErrors] = useState(initialLoginValues)

  const [randomizerFormValues, setRandomizerFormValues] = useState(initialRandomizerValues)
  const [randomizerErrors, setRandomizerErrors] = useState(initialRandomizerValues)

  const [signupFormValues, setSignupFormValues] = useState(initialSignupValues)
  const [signupErrors, setSignupErrors] = useState(initialSignupValues)

  const [contactFormValues, setContactFormValues] = useState(initialContactValues)
  const [contactErrors, setContactErrors] = useState(initialContactValues)

  const [accountValues, setAccountValues] = useState(initialSignupValues)
  const [accountErrors, setAccountErrors] = useState(initialSignupValues)

  //intialCharacters will probably be needed later on when I implement JSX in createdCharPage for the user's created characters
  const [characters, setCharacters] = useState(initialCharacters)

  const [disabled, setDisabled] = useState(initialDisabled)
  //For buttons on account page:
  const [disabledButton, setDisabledButton] = useState(initialDisabled)

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


  //Validation Errors + changing input for Sign Up Page:
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

  //Validation Errors + changing input for Account Page:
  const changeInputAccount = (name, value) => {
    yup
      .reach(formSchemaAccount, name)
      .validate(value)
      .then(() => {
        setAccountErrors({ ...accountErrors, [name]: '' })
      })
      .catch(err => {
        setAccountErrors({ ...accountErrors, [name]: err.errors })
      })

    setAccountValues({ ...accountValues, [name]: value })
  }

  useEffect(() => {
    formSchemaAccount.isValid(accountValues).then(validate => {
      setDisabled(!validate)
    })
  }, [accountValues])

  //Validation Errors for Randomizer Page:
  const changeInputRandomizer = (name, value) => {
    yup
      .reach(formSchemaRandomizer, name)
      .validate(value)
      .then(() => {
        setRandomizerErrors({ ...randomizerErrors, [name]: '' })
      })
      .catch(err => {
        setRandomizerErrors({ ...randomizerErrors, [name]: err.errors })
      })

    setRandomizerFormValues({ ...randomizerFormValues, [name]: value })
  }

  useEffect(() => {
    formSchemaRandomizer.isValid(randomizerFormValues).then(validate => {
      setDisabled(!validate)
    })
  }, [randomizerFormValues])

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
  const loginUser = userInfo => {
    axiosWithAuth()
      .post(`auth/login`, userInfo)
      .then(res => {
        setUser(res.data.user)
        setAccountValues(res.data.user)
        localStorage.setItem('token', res.data.token)

        if (res.data.message === "Welcome") {
          return (
            //Real navigate:
            navigate(`/${res.data.user.user_id}/created-characters`)
          )
        }
      })
      .catch((err) => {
        console.log(`Login Error:`, err)

        setLoginErrors({ ...loginErrors, ['request_err']: 'Invalid Credentials, please try again or sign up' })
      })
      .finally(() => {
        setLoginValues(initialLoginValues)
        setLoginErrors(initialLoginValues)
      })
  }

  const loginSubmit = event => {
    event.preventDefault()

    const userInfo = {
      username: loginValues.username,
      password: loginValues.password
    }

    loginUser(userInfo)
  }

  //Posting a new user to the user api when Signing Up
  const registerNewUser = (newUser) => {
    axiosWithAuth()
      .post('auth/register', newUser)
      .then(res => {
        setUser(res.data.user)
        setAccountValues(res.data.user)
        localStorage.setItem('token', res.data.token)

        navigate(`/${res.data.user.user_id}/created-characters`)

        setSignupFormValues(initialSignupValues)
        setSignupErrors(initialSignupValues)

        return user
      })
      .catch(err => {
        console.log(err)

        if (err.response.status === 500) {
          setSignupErrors({ ...signupErrors, username: 'That username already exists. Please pick another one.' })
        }
        else if (err.response.status === 400) {
          setSignupErrors({ ...signupErrors, ['request_err']: "You must complete all required fields before submitting" })
        }
      })
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

  //Account submit on save:
  const accountSave = event => {
    //make it so that if a field on the form changes, it only changes that key's value in the accountValues object
    //Maybe make it so that there's another variable where you insert ONLY the changed accountValues + that gets inputted into the axios request for editing the users account information
    event.preventDefault()

    const updatedUser = { user_id: user.user_id }
    const valueKeys = Object.keys(accountValues).slice(1, 7)

    valueKeys.forEach(key => {
      switch (key) {
        case 'first_name':
          if (accountValues.first_name !== user.first_name) {
            updatedUser.first_name = accountValues.first_name
          }
          return;
        case 'last_name':
          if (accountValues.last_name !== user.last_name) {
            updatedUser.last_name = accountValues.last_name
          }
          return;
        case 'username':
          if (accountValues.username !== user.username) {
            updatedUser.username = accountValues.username
          }
          return;
        case 'email':
          if (accountValues.email !== user.email) {
            updatedUser.email = accountValues.email
          }
          return;
        case 'dob':
          if (accountValues.dob !== user.dob) {
            updatedUser.dob = accountValues.dob
          }
          return;
        case 'password':
          if (accountValues.password !== '' && accountValues.password === accountValues.confirm_password) {
            updatedUser.password = accountValues.password
          }
          else if (accountValues.password !== '' && accountValues.password !== accountValues.confirm_password) {
            setAccountErrors({ ...accountErrors, confirm_password: `Passwords do not match` })
          }
          return;
        default:
          console.log('Nothing to see here!')
          return;
      }
    })

    console.log(updatedUser)
    saveUser(updatedUser)
  }

  const saveUser = (updatedUser) => {
    axiosWithAuth()
      .put(`users/${user.user_id}`, updatedUser)
      .then(res => {
        setUser(res.data)
        setDisabledButton(!disabledButton)
        setAccountErrors(initialSignupValues)
      })
      .catch(err => {
        console.log(`Error:`, err)

        setAccountErrors({ ...accountErrors, ['request_err']: `You must change something before saving. \n If you clicked edit on accident, feel free to click the cancel button.` })
      })
  }

  //Account submit on delete:
  const accountDelete = deleteUser => {
    console.log(`Delete button was clicked. ${user.first_name} was deleted.`)

    axiosWithAuth()
      .delete(`users/${user.user_id}`, deleteUser)
      .then(res => {
        localStorage.removeItem(`token`)
        setUser(initialUser)
        setDisabledButton(!disabledButton)
        navigate(`/`)
      })
      .catch(err => {
        console.log(`App.js DELETE request error:`, err)
      })
  }


  // //For "blurring" out the passwords for login/sign up pages:
  const handleShowPass = (id) => {
    if (window.location.pathname === `/login`) {
      setLoginValues({ ...loginValues, showPass: !loginValues.showPass })
    }
    else if (window.location.pathname === `/signup`) {
      if (id === 'input-pass-icon') {
        setSignupFormValues({ ...signupFormValues, showPass: !signupFormValues.showPass })
      }
      else if (id === 'input-confirm-pass-icon') {
        setSignupFormValues({ ...signupFormValues, showConfirm: !signupFormValues.showConfirm })
      }
    }
    else if (window.location.pathname === `/users/${user.user_id}`) {
      if (id === 'input-pass-icon') {
        setAccountValues({ ...accountValues, showPass: !accountValues.showPass })
      }
      else if (id === 'input-confirm-pass-icon') {
        setAccountValues({ ...accountValues, showConfirm: !accountValues.showConfirm })
      }
    }
  }

  return (
    <UserContext.Provider value={{ user }}>
      <div className="App">

        <Routes>
          <Route path={`/signup`}
            element={<SignUp
              changeSignup={changeInputSignup}
              valuesSignup={signupFormValues}
              signupErrors={signupErrors}
              submitNewUser={submitNewUser}
              handleShowPass={handleShowPass}
            />} />

          <Route path={`/login`}
            element={<Login
              changeLogin={changeInputLogin}
              valuesLogin={loginValues}
              loginErrors={loginErrors}
              submitLogin={loginSubmit}
              handleShowPass={handleShowPass}
            />} />

          {/* Private Routes for account and created character pages - can only access if the user has a login and is logged in */}
          <Route element={<PrivateRoute />}>
            {/* Below is a path to the account page - I made a component for it, but I will not be working on it unless I have time as a stretch */}
            <Route path={`/users/:user_id`}
              element={
                <Account
                  disabledButton={disabledButton}
                  setDisabledButton={setDisabledButton}
                  changeAccount={changeInputAccount}
                  valuesAccount={accountValues}
                  setValuesAccount={setAccountValues}
                  accountErrors={accountErrors}
                  setAccountErrors={setAccountErrors}
                  saveAccount={accountSave}
                  deleteAccount={accountDelete}
                  handleShowPass={handleShowPass}
                />
              } />

            {/* Below is a path to the created character(s) page - I made a component for it, but I will not be working on it unless I have time as a stretch */}
            < Route path={`/:user_id/created-characters`}
              element={
                <CreatedCharPage
                />
              } />

          </Route>

          <Route path={`/contact`}
            element={<Contact
              changeContact={changeInputContact}
              valuesContact={contactFormValues}
              contactErrors={contactErrors}
            />} />

          <Route path={`/character-randomizer`}
            element={<CharRandomizer
              changeRand={changeInputRandomizer}
              valuesRand={randomizerFormValues}
            />} />

          <Route exact path={`/`} element={<Home
          />} />
        </Routes>

      </div>
    </UserContext.Provider>
  );
}

export default App;
