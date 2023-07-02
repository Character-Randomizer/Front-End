import axios from 'axios'

const axiosWithAuth = () => {
   const token = localStorage.getItem('token')

   return axios.create({
      headers: {
         Authorization: token
      },
      baseURL: process.env.REACT_APP_BE_URL
   })
}

export default axiosWithAuth