//functions for getting birthdate in a correct format (Month Day, Year)
const getDOB = (userDob) => {
   const dob = userDob.split('T')[0]
   const dobParts = dob.split('-')
   const dobYear = dobParts[0]
   const dobMonth = dobParts[1]
   const dobDay = dobParts[2]

   return ([getMonth(dobMonth), ' ', dobDay, ',', ' ', dobYear])
}

const getMonth = month => {
   switch (month) {
      case '01':
         return 'January';
      case '02':
         return 'February';
      case '03':
         return 'March';
      case '04':
         return 'April';
      case '05':
         return 'May';
      case '06':
         return 'June';
      case '07':
         return 'July';
      case '08':
         return 'August';
      case '09':
         return 'September';
      case '10':
         return 'October';
      case '11':
         return 'November';
      case '12':
         return 'December';
      default:
         return ''
   }
}

export { getDOB }