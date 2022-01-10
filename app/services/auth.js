import Api from '../utils/api';
import { AppConstants } from '../utils/app-constants';
import { map } from 'rxjs/operators';
import AsyncStorage from '@react-native-community/async-storage';
import { BehaviorSubject } from 'rxjs';

export const Subject = new BehaviorSubject(false);
export const RefreshItemSubject = new BehaviorSubject(false);
export const CameraInstruction = new BehaviorSubject(false);
export const userRoleSubject = new BehaviorSubject(false);

const AuthService = {

    config() {
        return Api.get('/config').pipe(
            map(response => {
                const config = response.data.data.masterData;
                this.setConfig(config);
            }),
        );
    },
    login(data) {
        return Api.post('/auth/consumer/login', data).pipe(
            map(response => {
                const token = response.data.data.token;
                this.setToken(token);
            }),
        );
    },

    register(data) {
        return Api.post('/auth/consumer/register', data).pipe(
            map(response => {
                const token = response.data.data.token;
                const user = response.data.data.data;
                this.setToken(token);
                this.setUser(user);
            }),
        );
    },

    validateToken(value) {
        return Api.post('/auth/consumer/validate-token', value).pipe(
            map(response => response.data.data),
        );
    },

    patchUpdate(key, data) {
        return Api.put(`/consumer?propChanged=${key}`, data).pipe(
            map(response => {
                console.log(response.data.data, "HI");
                this.setUser(response.data.data);
                return response.data.data;
            }),
        );
    },

    consumerUpdate(data) {
        return Api.put(`/consumer/update`, data).pipe(
            map(response => {
                this.setUser(response.data.data);
                return response.data.data;
            }),
        );
    },


    requestOtp(data) {
        return Api.post('/auth/consumer/send-otp-login', data).pipe(
            map(response => {
                const user = response.data.data;
                this.setUser(user);
                return response.data.data;
            })
        );
    },

    logout() {
        return Api.post('/auth/consumer/logout').pipe(
            map(response => {
                this.clearStorage().then({});
            }),
        );
    },

    applyAsPro(data) {
        return Api.put('/consumer/apply-as-pro', data).pipe(
            map(response => {
                this.setUser(response.data.data);
                return response.data.data;
            }),
        );
    },

    switchAccount(role) {
        return Api.put(`/consumer/switch?role=${role}`).pipe(
            map(response => {
                this.setUser(response.data.data);
                this.setUserRole(response.data.data.currentRole);
                return response.data.data.currentRole;
            }),
        );
    },

    async setToken(token) {
        await AsyncStorage.setItem(
            AppConstants.AUTH.AUTH_TOKEN_KEY,
            JSON.stringify(token),
        );
    },

    async setUserRole(role) {
        await AsyncStorage.setItem(
            AppConstants.AUTH.ROLE,
            JSON.stringify(role),
        );
    },

    async setUser(user) {
        await AsyncStorage.setItem(
            AppConstants.AUTH.USER_KEY,
            JSON.stringify(user),
        );
    },

    async setHideCategoryInfo(data) {
        await AsyncStorage.setItem(
            AppConstants.HIDECATEGORY,
            JSON.stringify(data),
        );
    },

    async getHideCategoryInfo() {
        let data = await AsyncStorage.getItem(AppConstants.HIDECATEGORY);
        let parseValue = JSON.parse(data);
        return parseValue;
    },

    async setConfig(config) {
        await AsyncStorage.setItem(
            AppConstants.AUTH.CONFIG,
            JSON.stringify(config),
        );
    },

    async getConfig() {
        let config = await AsyncStorage.getItem(AppConstants.AUTH.CONFIG);
        let parseValue = JSON.parse(config);
        return parseValue;
    },

    async getUser() {
        let user = await AsyncStorage.getItem(AppConstants.AUTH.USER_KEY);
        let parseValue = JSON.parse(user);
        return parseValue;
    },

    async getUserRole() {
        let userRole = await AsyncStorage.getItem(AppConstants.AUTH.ROLE);
        let parseValue = JSON.parse(userRole);
        return parseValue;
    },

    async getToken() {
        let token = await AsyncStorage.getItem(AppConstants.AUTH.AUTH_TOKEN_KEY);
        let parseValue = JSON.parse(token);
        return parseValue;
    },

    async clearStorage() {
        await AsyncStorage.clear();
    },

    async setFirstItemShowValue(value) {
        await AsyncStorage.setItem(
            AppConstants.AUTH.DISPLAY_CAMERA_INSTRUCTIONS,
            JSON.stringify(value),
        );
    },

    async getFirstItemShowValue() {
        let value = await AsyncStorage.getItem(AppConstants.AUTH.DISPLAY_CAMERA_INSTRUCTIONS);
        let parseValue = JSON.parse(value);
        return parseValue;
    },

    async setIntroScreen(value) {
        await AsyncStorage.setItem(
            AppConstants.MESSAGE.SEEN_INTRO_SCREEN,
            JSON.stringify(value),
        );
    },

    async getIntroScreen() {
        let value = await AsyncStorage.getItem(AppConstants.MESSAGE.SEEN_INTRO_SCREEN);
        let parseValue = JSON.parse(value);
        return parseValue;
    },

    async setRecentExpertSearchHistory(history) {
        await AsyncStorage.setItem(
            AppConstants.EXPERT_SEARCH_HISTORY,
            JSON.stringify(history),
        );
    },

    async getRecentExpertSearchHistory() {
        let history = await AsyncStorage.getItem(AppConstants.EXPERT_SEARCH_HISTORY);
        let parseValue = JSON.parse(history);
        return parseValue;
    },
};

export default AuthService;
