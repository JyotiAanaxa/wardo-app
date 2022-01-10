import * as Yup from 'yup';
import { t } from '../utils/i18n';

const phoneRegExp = /^[1-9][0-9]{9}$/;
const numberRegExp = /^[0-9]+$/;
const noSpecialChars = /^[a-zA-Z ]{2,30}$/;
const instagramUsername = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;
const urlRegExp = /^((https?|ftp|smtp):\/\/)?(www.)(.*?)\.(?:com|au|uk|co|in)$/;
export const productPageURL_Regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#%[\]@!\$&'\(\)\*\+,;=.]+$/;
const MAX_LENGTH = 10;

export const EmailValidation = Yup.object().shape({
    email: Yup.string()
        .email('' + t('form.email.invalid'))
        .required('' + t('form.email.required'))
});

export const ApplyProValidation = Yup.object().shape({
    email: Yup.string()
        .email('' + t('form.email.invalid'))
        .required('' + t('form.email.required')),
    name: Yup.string()
        .when(['url'], {
            is: (url) => !url || url && (url.toString().length === 0), // alternatively: (val) => val == true
            then: Yup.string().required('' + t('form.name.required'))
                .matches(instagramUsername, '' + t('form.name.invalid'))
                .test('len', t('Atleast 4 characters required'), val => !val || (val && val.toString().length === 4)),
            otherwise: Yup.string()
                .matches(instagramUsername, '' + t('form.name.invalid'))
        }),
    url: Yup.string()
        .when(['name'], {
            is: (name) => !name || name && name.toString().length === 0, // alternatively: (val) => val == true
            then: Yup.string()
                .matches(urlRegExp, "Invalid Url"),
            otherwise: Yup.string()
                .matches(urlRegExp, "Invalid Url"),
        }),
}, ['name', 'url']);

export const PasswordValidation =
    Yup.object().shape({
        password: Yup.string()
            .required('' + t('form.password.required'))
    });

export const NameValidation = Yup.object().shape({
    name: Yup.string()
        .required('' + t('form.name.required'))
        .matches(noSpecialChars, '' + t('form.name.invalid'))
        .nullable('' + t('form.name.invalid')),
});

export const GenderValidation = Yup.object().shape({
    gender: Yup.string()
        .required('' + t('form.gender.required'))
});

export const EcoValidation = Yup.object().shape({
    ecoFriendlyOpted: Yup.string()
});

export const AgeValidation = Yup.object().shape({
    ageRange: Yup.string()
        .required('' + t('form.age.required'))
});

export const ClothingValidation = Yup.object().shape({
    clothingPreference: Yup.string()
        .required('' + t('form.clothing.required'))
});


export const CountryValidation = Yup.object().shape({
    country: Yup.string()
        .required('' + t('form.selectcountry.required'))
        .nullable('' + t('form.selectcountry.required')),
    city: Yup.string()
        .required('' + t('form.selectcity.required'))
        .nullable('' + t('form.selectcity.required'))
});

export const NumberValidation = Yup.object().shape({
    mobileNumber: Yup.string()
        .required('' + t('form.mobilenumber.required'))
        .matches(phoneRegExp, '' + t('form.mobilenumber.invalid.placeholder'))
        .typeError('' + t('form.mobilenumber.invalid.placeholder'))
        .test('len', t('form.mobileNumber.invalid.length.msg'), val => !val || (val && val.toString().length === MAX_LENGTH))
});

export const OtpValidation =
    Yup.object().shape({
        otp: Yup.string()
            .required('' + t('form.otp.required'))
            .matches(numberRegExp, '' + t('form.otp.inavlid'))
            .nullable('' + t('form.otp.required')),
    });

// validations for stylist onboarding

export const CityValidation = Yup.object().shape({
    city: Yup.string()
        .required('' + t('City is required'))
        .matches(noSpecialChars, '' + t('Invalid Format'))
        .nullable('' + t('City is required'))
});

export const ServiceValidation = Yup.object().shape({
    specialities: Yup.string()
        .required('' + t('Please Select atleast one service'))
        .nullable('' + t('Please Select atleast one service'))
});

export const ExperienceValidation = Yup.object().shape({
    experienceRange: Yup.string()
        .required('' + t('Please Select Experience'))
        .nullable('' + t('Please Select Styling Experience'))
});

export const WorkValidation = Yup.object().shape({
    typesOfworkDone: Yup.string()
        .required('' + t('Please Select atleast one work'))
        .nullable('' + t('Please Select atleast one work'))
});

export const WhyTextValidation = Yup.object().shape({
    whyText: Yup.string()
        .required('' + t('Field is required'))
        .nullable('' + t('Field is required'))
});

export const WhatTextValidation = Yup.object().shape({
    unit: Yup.string()
        .required('' + t('Field is required'))
        .matches(numberRegExp, '' + t('Only number is allowed'))
        .nullable('' + t('Field is required')),
    deliverables: Yup.array()
        .required('' + t('Field is required'))
        .test('len', t('Field is required'), val => !val || (val && val[0] && val[0] !== ''))
});

export const CostValidation = Yup.object().shape({
    costs: Yup.string()
        .required('' + t('Field is required'))
        .matches(numberRegExp, '' + t('Only number is allowed'))
        .nullable('' + t('Field is required'))
});

export const AboutValidation = Yup.object().shape({
    aboutMe: Yup.string(),
    experiences: Yup.array(),
    resumeUrl: Yup.string(),
    pinterestUrl: Yup.string().matches(productPageURL_Regex, "Invalid Url"),
    websiteUrl: Yup.string().matches(productPageURL_Regex, "Invalid Url"),
    linkedInUrl: Yup.string().matches(productPageURL_Regex, "Invalid Url"),
});

export const CustomQuestValidation = Yup.object().shape({
    customerQuestions: Yup.array()
});

export const ProfileValidation = Yup.object().shape({
    profilePicUrl: Yup.string(),
    name: Yup.string()
        .required('' + t('form.name.required'))
        .matches(noSpecialChars, '' + t('form.name.invalid'))
        .nullable('' + t('form.name.invalid')),
    mobileNumber: Yup.string(),
    gender: Yup.string()
        .required('' + t('form.gender.required')),
    ecoFriendlyOpted: Yup.boolean()
});
