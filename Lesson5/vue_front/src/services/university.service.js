import axios from 'axios';
import authHeader from './auth-header';

const API_URL = process.env.VUE_APP_API_URL;

class UniversityService {

  async getUniversities() {    
    return await axios.get(API_URL + 'universities',
    { headers: authHeader() });
  }

  async createUniversity(universitiy) {
    return await axios.post(API_URL + 'universities', universitiy ,
      { headers: authHeader() }
    );
  }

  async getUniversitiy(id) {    
    return await axios.get(API_URL + 'universities/' + id,
    { headers: authHeader() });
  }

  async updateUniversity(universitiy) {    
    return await axios.patch(API_URL + 'universities/update', universitiy,
    { headers: authHeader() });
  }

}

export default new UniversityService();