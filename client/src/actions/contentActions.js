import { useDispatch } from 'react-redux';
import axios from 'axios';

export const getCurrentUserContent = () => {

}

export const deleteContentItem = async id => {
  axios.delete(`/content/${id}`, localStorage.getItem('token'))
    .then(res => console.log(res))
    .catch(err => console.log(err));
}
