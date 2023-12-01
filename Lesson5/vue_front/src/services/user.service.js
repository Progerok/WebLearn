import axios from 'axios';
import authHeader from './auth-header';

const API_URL = process.env.VUE_APP_API_URL;
const current_user = JSON.parse(localStorage.getItem('user'));

class UserService {

  async getUserInfo() {    
    return await axios.get(API_URL + 'user/' + current_user.id,
    { headers: authHeader() });
  }

  async updateUserInfo(user) {
    const body = {
      id: current_user.id,
      name: user.name
    };
    
    return await axios.patch(API_URL + 'user/update', body ,
      { headers: authHeader() }
    )
    .then(response => {
      if (response.data.id) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    });
    
  }
}

export default new UserService();