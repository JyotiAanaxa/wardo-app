import { Translate } from './translations';

export const t = key => {
    let lang = "en";
    return Translate[lang] ? Translate[lang][key] || key : key;
}