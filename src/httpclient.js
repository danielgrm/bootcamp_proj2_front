
import axios from 'axios';
// import setfauth from './login'
//import {getToken} from './login'

const httpClient = axios.create({
    // baseURL: `http://localhost:3002`,
    baseURL: `https://nameless-plateau-96589.herokuapp.com/`
    // headers: {
    //     'Content-Type': 'application/json'
    // }
})

const TOKEN_KEY = 'bootcamp-infnet'

const getToken = () => localStorage.getItem(TOKEN_KEY)

httpClient.defaults.headers['Content-Type'] = 'application/json';
if (getToken()) {
    httpClient.defaults.headers['x-auth-token'] = getToken ();
}

const interceptor = httpClient.interceptors.response.use(
    response => response,
    error => {
        // Error
        const { response: { status } } = error;

        //  if (error.message === 'Network Error' && !error.response) {
        //      alert('você está sem internet')
        //  }

        switch (status) {
            case 400:
               alert("Usuario nao existe")

                break;
            case 404:
                alert("Senha invalida")

                break;
            // default:
            //     console.log(status, `Aconteceu um erro ${status}`)
            //     break;
        }
        httpClient.interceptors.response.eject(interceptor);
        return Promise.reject(error);
    }
);


export default httpClient