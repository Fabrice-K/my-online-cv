import Footer from './Footer';
import Header from './Header';
import Seo from '../Seo';

import { LayoutProps } from './LayoutProps';

const Layout = ({ children }: LayoutProps) => (
  <>
    <Seo siteName="Yann fit" siteTitle="Personal training" description="Improve your fitness" />
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  </>
);

export default Layout;