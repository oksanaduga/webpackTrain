import axios from "axios";
import { setRepos } from '../../reducers/reposReducer';

export const getRepos = (searchQuery = 'stars%3A%3E0') => {
    return async(dispatch) => {
        const response = await  axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&order=desc&page=1`);
        dispatch(setRepos(response.data))
    }
}
