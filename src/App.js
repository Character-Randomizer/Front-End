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
import { formSchemaSignup, formSchemaContact, formSchemaLogin, formSchemaAccount } from './validation/formSchemas'

//Authorization
import axiosWithAuth from './authorization/axiosWithAuth';
import PrivateRoute from './authorization/privateRoutes';

//State Management - Context API
import { UserContext } from './contextAPI';

//importing state variables:
import { initialCharacters, initialContactValues, initialDisabled, initialLoginValues, initialUser, initialSignupValues } from './variables/stateVariables'


function App() {
  const [user, setUser] = useState(initialUser)

  //Form Values:
  const [loginValues, setLoginValues] = useState(initialLoginValues)
  const [accountValues, setAccountValues] = useState(initialSignupValues)
  const [signupFormValues, setSignupFormValues] = useState(initialSignupValues)

  //intialCharacters will probably be needed later on when I implement JSX in createdCharPage for the user's created characters
  const [characters, setCharacters] = useState(initialCharacters)

  const navigate = useNavigate()


  // //For "blurring" out the passwords for account, login, and signup up pages:
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
              setUser={setUser}
              setAccountValues={setAccountValues}
              handleShowPass={handleShowPass}
              signupFormValues={signupFormValues}
              setSignupFormValues={setSignupFormValues}
              navigate={navigate}
            />} />

          <Route path={`/login`}
            element={<Login
              setUser={setUser}
              navigate={navigate}
              handleShowPass={handleShowPass}
              loginValues={loginValues}
              setLoginValues={setLoginValues}
              setAccountValues={setAccountValues}
            />} />

          {/* Private Routes for account and created character pages - can only access if the user has a login and is logged in (has a token) */}
          <Route element={<PrivateRoute />}>
            <Route path={`/users/:user_id`}
              element={
                <Account
                  accountValues={accountValues}
                  setAccountValues={setAccountValues}
                  handleShowPass={handleShowPass}
                  navigate={navigate}
                  setUser={setUser}
                />
              } />

            {/* Below is a path to the created character(s) page - I made a component for it, but I will not be working on it unless I have time as a stretch */}
            < Route path={`/:user_id/created-characters`}
              element={
                <CreatedCharPage />
              } />

          </Route>

          <Route path={`/contact`}
            element={<Contact
            />} />

          <Route path={`/character-randomizer`}
            element={<CharRandomizer
            />} />

          <Route exact path={`/`} element={<Home
          />} />
        </Routes>

      </div>
    </UserContext.Provider>
  );
}

export default App;