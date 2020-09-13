import axios from 'axios';

export const createContent = () => {
  
}

export const deleteContentItem = async id => {
  axios.delete(`/content/${id}`, localStorage.getItem('token'))
    .then(res => console.log(res))
    .catch(err => console.log(err));
}
