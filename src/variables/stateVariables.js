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

export { initialCharacters, initialContactValues, initialDisabled, initialLoginValues, initialRandomizerValues, initialUser, initialSignupValues }