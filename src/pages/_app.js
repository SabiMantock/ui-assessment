import Layout from '@/components/Layout';
import '@/styles/globals.css';
import i18next from '../utils/i18n';
import {I18nextProvider} from 'react-i18next';

export default function App({Component, pageProps}) {
  return (
    <I18nextProvider i18n={i18next}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </I18nextProvider>
  );
}
