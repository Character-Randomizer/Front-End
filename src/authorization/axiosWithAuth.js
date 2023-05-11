import axios from 'axios'

const axiosWithAuth = () => {
   const token = localStorage.getItem('token')

   return axios.create({
      headers: {
         Authorization: token
      },
      baseURL: process.env.BASE_URL
   })
}

export default axiosWithAuth