import axios from 'axios'

const axiosWithAuth = () => {
   const token = localStorage.getItem('token')

   return axios.create({
      headers: {
         Authorization: token
      },
      baseURL: 'https://character-randomizer-backend.herokuapp.com/api/'
   })
}

export default axiosWithAuth