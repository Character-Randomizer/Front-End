import axios from 'axios'

const axiosWithAuth = () => {
   const token = localStorage.getItem('token')

   return axios.create({
      headers: {
         Authorization: token
      },
      baseURL: `https://character-randomizer-api.onrender.com`
   })
}

export default axiosWithAuth