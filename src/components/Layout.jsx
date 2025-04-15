import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  return (
    <div className='layout-container'>
      <Header />
      <main className="main-content">
        <Outlet /> {/* This renders the child page component */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
