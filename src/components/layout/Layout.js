import PropTypes from 'prop-types';

import Footer from './Footer';
import Header from './Header';
import Seo from '../Seo';

const Layout = ({ children }) => (
  <>
    <Seo siteTitle="portoflio site" title="FK" />
    <body>
      <Header />
      <main>{children}</main>
      <Footer />
    </body>
  </>
);

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;