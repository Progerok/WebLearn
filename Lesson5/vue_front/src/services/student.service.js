import axios from 'axios';
import authHeader from './auth-header';

const API_URL = process.env.VUE_APP_API_URL;

class StudentService {

  async getStudent() {    
    return await axios.get(API_URL + 'students',
    { headers: authHeader() });
  }

  async createStudent(student) {
    return await axios.post(API_URL + 'students', student ,
      { headers: authHeader() }
    );
  }

  async getStudent(id) {    
    return await axios.get(API_URL + 'students/' + id,
    { headers: authHeader() });
  }

  async updateStudent(student) {    
    return await axios.patch(API_URL + 'students/update', student,
    { headers: authHeader() });
  }

}

export default new StudentService();