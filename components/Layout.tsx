import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

type layoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: layoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
