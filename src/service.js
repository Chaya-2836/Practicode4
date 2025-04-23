import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_URI

axios.interceptors.response.use(
  response => {
      return response;
  },
  error => {
      console.error('Error response:', error.response);
      return Promise.reject(error);
  }
);

export default {
  getTasks: async () => {
    const result = await axios.get(`/get`)    
    return result.data;
  },

  addTask: async(name)=>{
    console.log('addTask', name)
    const result = await axios.post(`/items`, {name, isComplete: false});    
    return result.data;
  },

  setCompleted: async(id, complete)=>{
    console.log('setCompleted', {id, complete})
    const result = await axios.put(`/items/${id}?complete=${complete}`);    
    return result.data;
  },

  deleteTask:async(id)=>{
    console.log('deleteTask')
    await axios.delete(`/items/${id}`)

    
  }
};
