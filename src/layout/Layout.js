import React from 'react';
import Header from './Header';
import Footer from './Footer';
const Layout = ({ children }) => {
    return (
    <React.Fragment>
        <div className="ParentLayout paddingTopHeader">
          <Header />
          <div className="ChildLayout">
              {children}
          </div>
          <Footer/>
        </div>
    </React.Fragment>
    );
};
export default Layout;