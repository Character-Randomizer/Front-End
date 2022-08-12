import * as yup from 'yup'

const formSchemaSignup = yup.object().shape({
   first_name: yup.string()
      .min(1, 'first name must be at least 1 character')
      .required('first name is required'),

   last_name: yup.string()
      .min(1, 'last name must be at least 1 character long')
      .required('last name is required'),

   username: yup.string()
      .min(5, 'username must be at least 5 characters long')
      .required('username is required'),

   password: yup.string()
      .matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
         "The password must contain at least 8 characters, one uppercase, one number and one special case character")
      .required('a password is required'),

   confirm_password: yup.string()
      .oneOf([yup.ref('password'), null], 'passwords do not match')
      .required('you must confirm your password'),

   email: yup.string()
      .email('enter a valid email')
      .required('you must enter an email'),

   terms: yup.boolean()
      .required('terms is required'),

   // DOB will be in the form of "month/day/year 00/00/000", not sure right now how to do this as a validation - possibly with .date() like below, but unsure if this is exactly what I want, need to verify later
   dob: yup.date()
      .min('1900-01-01', 'If you are in fact older than 122, please contact the developers. Otherwise, please enter your birthdate.')
      .max('2016-01-01', 'Are you under 6 years old? If so, are you a genius and please contact the developers. Otherwise please enter your birthdate. ')
      .required('please enter your date of birth')
})

const formSchemaRandom = yup.object().shape({
   first_name: yup.string()
      .min(1, 'first name must be at least 1 character')
      .required('first name is required'),

   last_name: yup.string(),

   level: yup.number(),

   class: yup.string(),

   class_focus: yup.string(),

   alignment: yup.string(),

   race: yup.string().required('please select a race'),

   physical_description: yup.string(),

   strength: yup.number()
      .min(1, 'number must be between 1 and 20')
      .max(20, 'number must be between 1 and 20')
      .required('strength score is required'),

   dexterity: yup.number()
      .min(1, 'number must be between 1 and 20')
      .max(20, 'number must be between 1 and 20')
      .required('dexterity score is required'),

   constitution: yup.number()
      .min(1, 'number must be between 1 and 20')
      .max(20, 'number must be between 1 and 20')
      .required('constitution score is required'),

   intelligence: yup.number()
      .min(1, 'number must be between 1 and 20')
      .max(20, 'number must be between 1 and 20')
      .required('intelligence score is required'),

   wisdom: yup.number()
      .min(1, 'number must be between 1 and 20')
      .max(20, 'number must be between 1 and 20')
      .required('wisdom score is required'),

   charisma: yup.number()
      .min(1, 'number must be between 1 and 20')
      .max(20, 'number must be between 1 and 20')
      .required('charisma score is required'),

   gender: yup.string(),

   height: yup.string(),

   age: yup.number(),

   weight: yup.number(),

   background: yup.string()
})

const formSchemaContact = yup.object().shape({
   first_name: yup.string()
      .min(1, 'first name must be at least 1 character')
      .required('first name is required'),

   last_name: yup.string()
      .min(1, 'last name must be at least 1 character long')
      .required('last name is required'),

   username: yup.string()
      .min(5, 'username must be at least 5 characters long'),

   email: yup.string()
      .email('enter a valid email')
      .required('you must enter an email'),

   subject: yup.string().required('enter a subject'),

   message: yup.string()
      .max(1000, 'the message must be between 1 - 1,000 characters long')
      .required('a message is required')
})

const formSchemaLogin = yup.object().shape({
   username: yup.string()
      .min(5, 'username must be at least 5 characters long')
      .required('username is required'),

   password: yup.string()
      .matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
         "The password must contain at least 8 characters, one uppercase, one number and one special case character")
      .required('a password is required')
})

export { formSchemaSignup, formSchemaRandom, formSchemaContact, formSchemaLogin }