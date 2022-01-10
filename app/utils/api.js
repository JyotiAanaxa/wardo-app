import Axios from 'axios-observable';
import { AppConstants } from './app-constants';
import AsyncStorage from '@react-native-community/async-storage';

const Api = Axios.create({
    baseURL: AppConstants.baseURL,
});

Api.interceptors.request.use(
    async config => {
        let token = await AsyncStorage.getItem(AppConstants.AUTH.AUTH_TOKEN_KEY);
        if (token) {
            let parseValue = JSON.parse(token);
            config.headers.common[AppConstants.AUTH.AUTH_TOKEN_KEY] = parseValue;
        }
        return config;
    },
    error => { },
);

export default Api;
