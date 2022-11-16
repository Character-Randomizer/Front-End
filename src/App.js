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

const initialSignupValues = {
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
            navigate(`/${res.data.user.user_id}/created-characters`)
          )
        }
      })
      .catch((err) => {
        console.log(`Login Error:`, err)

        setLoginErrors({ ...loginErrors, ['request_err']: 'Invalid Credentials, please try again or sign up' })
      })
      .finally(setLoginValues(initialLoginValues))
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

        return user
      })
      .catch(err => {
        console.log(err)

        setSignupErrors({ ...signupErrors, ['request_err']: "You must complete all required fields before submitting" })
      })
      .finally(setSignupFormValues(initialSignupValues))
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
    event.preventDefault()

    console.log(`Save button was clicked`)
    const updatedUser = {
      first_name: accountValues.first_name,
      last_name: accountValues.last_name,
      username: accountValues.username,
      password: accountValues.password,
      email: accountValues.email,
      dob: accountValues.dob,
    }

    saveUser(updatedUser)
  }

  const saveUser = (updatedUser) => {
    axiosWithAuth()
      .put(`users/${user.user_id}`, updatedUser)
      .then(res => {
        setUser(res.data)
        setDisabledButton(!disabledButton)
      })
      .catch(err => {
        console.log(`App.js PUT request error:`, err)

        setAccountErrors({ ...accountErrors, ['request_err']: "You must complete all required fields before saving" })
      })
  }

  //Account submit on delete:
  const accountDelete = event => {
    event.preventDefault()

    console.log(`Delete button was clicked. ${user.first_name} was deleted.`)

    return (
      <>
        <form>
          <h1>Delete this account?</h1>
          <p>If you are sure you want to delete this account, type in DELETE into the field below and click the Delete button.</p>
          <input
            type='text'
            id='delete-input'
            name='delete'
          />
          <button className='cancel-btn'>Cancel</button>
          <button className='delete-btn-2'>Delete</button>
        </form>
      </>
    )
  }

  const deleteUser = (deleteUser) => {
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
                  accountErrors={accountErrors}
                  saveAccount={accountSave}
                  deleteAccount={accountDelete}
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
