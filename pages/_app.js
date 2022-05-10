import '../styles/globals.css';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Router from 'next/router';
//redux
import { Provider } from 'react-redux';
import store from '../store/index';
//react
import { useState } from 'react';
//material
import Progress from '../components/ui/Progress';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  Router.events.on('routeChangeStart', (url) => {
    setLoading(true);
  });

  Router.events.on('routeChangeComplete', (url) => {
    setLoading(false);
  });
  return (
    <Provider store={store}>
      {loading && <Progress />}
      {!loading && (
        <Layout>
          <Head>
            <title>Tech City</title>
            <meta name='description' content='Sell best price laptops' />
            <meta
              name='viewport'
              content='initial-scale=1.0 , width=device-width'
            />
          </Head>
          <div dir='rtl'>
            <Component {...pageProps} />
          </div>
        </Layout>
      )}
    </Provider>
  );
}

export default MyApp;

// json-server --watch data/db.json --port 8000
