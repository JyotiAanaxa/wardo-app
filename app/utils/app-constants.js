export const AppConstants = {
    // baseURL: 'https://api.wardo.sixsprintscloud.com/api/v1',
    baseURL: 'http://ec2-13-127-255-66.ap-south-1.compute.amazonaws.com:8080/api/v1',

    MESSAGE: {
        RETRY: 'RETRY',
        UNDO: 'UNDO',
        RESET: 'RESET',
        CLOSE: 'CLOSE',
        LOGGED_OUT: 'LOGGED_OUT',
        SEEN_INTRO_SCREEN: 'SEEN_INTRO_SCREEN'
    },
    ENTITY: {
        CATEGORY: 'CATEGORY',
        SERVICES: 'SERVICES',
        TRENDING: 'TRENDING',
        PERSONAL: 'PERSONAL',
        COMMERCIAL: 'COMMERCIAL',
        BEAUTIY: 'BEAUTY',
        SUSTAINABLE: 'SUSTAINABLE',
    },
    AUTH: {
        AUTH_TOKEN_KEY: 'X-AUTH-TOKEN',
        ROLE: 'ROLE',
        USER_KEY: 'USER',
        MEMBER_KEY: 'MEMBER',
        CONFIG: 'CONFIG',
        DISPLAY_CAMERA_INSTRUCTIONS: 'DISPLAY_CAMERA_INSTRUCTIONS'
    },
    ROLE: {
        CONSUMER: 'CONSUMER',
        STYLIST: 'STYLIST'
    },
    FORM: {
        TEXT: 'TEXT',
        TEXTAREA: 'TEXTAREA',
        CHECKBOX: 'CHECKBOX',
        RADIO: 'RADIO',
        SWITCH: 'SWITCH',
        GENDER: 'GENDER',
        OTP: 'OTP',
        PICKER: 'PICKER',
        CLOTHING_PREFERENCES: 'CLOTHING_PREFERENCES',
    },

    PROFILE_FORM: {
        TEXT: 'TEXT',
        CHECK_LIST: 'CHECK_LIST',
        EXPERIENCE: 'EXPERIENCE'
    },

    FILTERS: {
    },

    TOPICS: {
        REFRESH_MY_WARDROBE: 'REFRESH_MY_WARDROBE',
        REFRESH_WARDROBE: 'REFRESH_WARDROBE',
        REFRESH_ITEM_LIST: 'REFRESH_ITEM_LIST'
    },

    HIDECATEGORY: 'HIDECATEGORY',

    EXPERT_SEARCH_HISTORY: 'EXPERT_SEARCH_HISTORY',

    SHOPPING_LIST: {
        NEW_LIST: {
            PAGE_TITLE: "What would you like to name this list?",
            INPUT_PLACEHOLDER: "E.g Cocktail Dress, Spain Trip  Checklist etc."
        }
    }
};
