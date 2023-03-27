import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '../locales/en.json';
import fr from '../locales/fr.json';

i18next.use(initReactI18next).init({
  lng: 'en',
  resources: {
    en: {translation: en},
    fr: {translation: fr},
  },
});

export default i18next;
