import Layout from '../components/layout/Layout';

import '../styles/styles.scss';

// This default export is required in a new `pages/_app.js` file.
const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;