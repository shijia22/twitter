import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getTopUsers() {
    return apiHelper.get('/users/top_users', {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
  },
  getCurrentUser() {
    return apiHelper.get('/current_user', {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  }
  // addFollowed({ userId }) {
  //   return apiHelper.post(`/following/${userId}`, null, {
  //     headers: { Authorization: `Bearer ${getToken()}` },
  //   })
  // },
  // deleteFollowed({ userId }) {
  //   return apiHelper.post(`/following/${userId}`, null, {
  //     headers: { Authorization: `Bearer ${getToken()}` },
  //   })
  // },
}