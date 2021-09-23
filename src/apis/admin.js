import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  users: {
    get() {
      return apiHelper.get('/admin/users', {
        headers: { Authorization: `Bearer ${getToken()}` },
      })
    },
  },
  tweets: {
    get({ page }) {
      return apiHelper.get('/admin/tweets', {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
        params: {
          page,
        }
      })
    },
    delete({ tweetId }) {
      return apiHelper.delete(`/admin/tweets/${tweetId}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
    },
  },
}
