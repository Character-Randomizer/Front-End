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
import { formSchemaSignup, formSchemaRandomizer, formSchemaContact, formSchemaLogin } from './validation/formSchemas'

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
  const [loginValues, setLoginValues] = useState(initialLoginValues)
  const [loginErrors, setLoginErrors] = useState(initialLoginValues)

  //intialCharacters will probably be needed later on when I implement JSX in createdCharPage for the user's created characters
  const [characters, setCharacters] = useState(initialCharacters)

  const [randomizerFormValues, setRandomizerFormValues] = useState(initialRandomizerValues)
  const [randomizerErrors, setRandomizerErrors] = useState(initialRandomizerValues)

  const [user, setUser] = useState(initialUser)

  const [signupFormValues, setSignupFormValues] = useState(initialSignupValues)
  const [signupErrors, setSignupErrors] = useState(initialSignupValues)

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
