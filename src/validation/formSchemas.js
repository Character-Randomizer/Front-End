import * as yup from 'yup'

const formSchemaSignup = yup.object().shape({
   first_name: yup.string()
      .min(1, 'First name must be at least 1 character')
      .required('First name is required'),

   last_name: yup.string()
      .min(1, 'Last name must be at least 1 character long')
      .required('Last name is required'),

   username: yup.string()
      .min(5, 'Username must be at least 5 characters long')
      .required('Username is required'),

   password: yup.string()
      .matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
         "The password must contain at least 8 characters, one uppercase, one number and one special case character")
      .required('a password is required'),

   confirm_password: yup.string()
      // .oneOf([yup.ref('password'), null], 'Passwords do not match')
      .required('You must confirm your password'),

   email: yup.string()
      .email('Enter a valid email')
      .required('You must enter an email'),

   terms: yup.boolean()
      .required('Terms is required'),

   // DOB will be in the form of "month/day/year 00/00/000", not sure right now how to do this as a validation - possibly with .date() like below, but unsure if this is exactly what I want, need to verify later
   dob: yup.date()
      .min('1900-01-01', 'If you are in fact older than 122, please contact the developers. Otherwise, please enter your birthdate.')
      .max('2016-01-01', 'Are you under 6 years old? If so, are you a genius and please contact the developers. Otherwise please enter your birthdate. ')
      .required('Enter your date of birth')
})

const formSchemaRandomizer = yup.object().shape({
   first_name: yup.string()
      .min(1, 'First name must be at least 1 character')
      .required('First name is required'),

   last_name: yup.string(),

   level: yup.number(),

   class: yup.string(),

   class_focus: yup.string(),

   alignment: yup.string(),

   race: yup.string().required('Select a race'),

   physical_description: yup.string(),

   strength: yup.number()
      .min(1, 'Strength must be between 1 and 20')
      .max(20, 'Strength must be between 1 and 20')
      .required('Strength score is required'),

   dexterity: yup.number()
      .min(1, 'Dexterity must be between 1 and 20')
      .max(20, 'Dexterity must be between 1 and 20')
      .required('Dexterity score is required'),

   constitution: yup.number()
      .min(1, 'Constitution must be between 1 and 20')
      .max(20, 'Constitution must be between 1 and 20')
      .required('Constitution score is required'),

   intelligence: yup.number()
      .min(1, 'Intelligence must be between 1 and 20')
      .max(20, 'Intelligence must be between 1 and 20')
      .required('Intelligence score is required'),

   wisdom: yup.number()
      .min(1, 'Wisdom must be between 1 and 20')
      .max(20, 'Wisdom must be between 1 and 20')
      .required('Wisdom score is required'),

   charisma: yup.number()
      .min(1, 'Charisma must be between 1 and 20')
      .max(20, 'Charisma must be between 1 and 20')
      .required('Charisma score is required'),

   gender: yup.string(),

   height: yup.string(),

   age: yup.number(),

   weight: yup.number(),

   background: yup.string()
})

const formSchemaContact = yup.object().shape({
   first_name: yup.string()
      .min(1, 'First name must be at least 1 character')
      .required('First name is required'),

   last_name: yup.string()
      .min(1, 'Last name must be at least 1 character long')
      .required('Last name is required'),

   username: yup.string()
      .min(5, 'Username must be at least 5 characters long').required('Username is required'),

   subject: yup.string().required('Enter a subject'),

   message: yup.string()
      .min(10, 'The message must be between 10 - 1,000 characters long')
      .max(1000, 'The message must be between 10 - 1,000 characters long')
      .required('A message is required')
})

const formSchemaLogin = yup.object().shape({
   username: yup.string()
      .min(5, 'Username must be at least 5 characters long')
      .required('Username is required'),

   password: yup.string()
      .matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
         "The password must contain at least 8 characters, one uppercase, one number and one special case character")
      .required('A password is required')
})

const formSchemaAccount = yup.object().shape({
   first_name: yup.string()
      .min(1, 'First name must be at least 1 character')
      .required('First name is required'),

   last_name: yup.string()
      .min(1, 'Last name must be at least 1 character long')
      .required('Last name is required'),

   username: yup.string()
      .min(5, 'Username must be at least 5 characters long')
      .required('Username is required'),

   password: yup.string()
      .matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
         "The password must contain at least 8 characters, one uppercase, one number and one special case character")
      .required('a password is required'),

   confirm_password: yup.string()
      // .oneOf([yup.ref('password'), null], 'Passwords do not match')
      .required('You must confirm your password'),

   email: yup.string()
      .email('Enter a valid email')
      .required('You must enter an email'),

   // DOB will be in the form of "month/day/year 00/00/000", not sure right now how to do this as a validation - possibly with .date() like below, but unsure if this is exactly what I want, need to verify later
   dob: yup.date()
      .min('1900-01-01', 'If you are in fact older than 122, please contact the developers. Otherwise, please enter your birthdate.')
      .max('2016-01-01', 'Are you under 6 years old? If so, are you a genius and please contact the developers. Otherwise please enter your birthdate. ')
      .required('Enter your date of birth')
})

export { formSchemaSignup, formSchemaRandomizer, formSchemaContact, formSchemaLogin, formSchemaAccount }