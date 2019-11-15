import React from 'react';
import Link from 'next/link';

const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav className="bg-purple-900 text-white w-full py-4">
    <div className="container mx-auto flex items-center">
      <img className="w-8 mr-2" src="/bis-logo.png" alt="bismuth logo" />
      Argon Wallet
    </div>
  </nav>
);

export default Nav;
