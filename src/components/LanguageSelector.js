import Image from 'next/image';
import React from 'react';
import {useTranslation} from 'react-i18next';
import i18next from '../utils/i18n';
import intl from '../../public/images/intl.png';

export const LanguageSelector = () => {
  const {t} = useTranslation();

  function handleLanguageChange(event) {
    i18next.changeLanguage(event.target.value);
  }
  return (
    <>
      <div className='w-7'>
        <Image src={intl} alt='globe' className='w-full' />
      </div>
      <select
        value={i18next.language}
        onChange={handleLanguageChange}
        className='bg-neutral-700 outline-none  text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      >
        <option value='en'>{t('EN')}</option>
        <option value='es'>{t('ES')}</option>
        <option value='fr'>{t('FR')}</option>
      </select>
    </>
  );
};
