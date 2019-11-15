import React from 'react';
import Head from 'next/head';

import Nav from './Nav';
import '../styles/main.css';

const Layout = props => (
  <div>
    <Head>
      <link rel="manifest" href="/manifest.json" />
    </Head>
    <Nav />
    <div className="flex flex-col h-screen">
      <div className="flex-1 bg-gray-900 pt-6">
        <div className="container mx-auto px-4 flex">{props.children}</div>
      </div>
      <footer className="text-center py-1 bg-gray-900 text-gray-700">
        © {new Date().getFullYear()} ▪ Built with ♥ by <a href="https://www.bismuthcz">Bismuth</a>
      </footer>
    </div>
  </div>
);

export default Layout;
