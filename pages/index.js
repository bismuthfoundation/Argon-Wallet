import React from 'react';
import Head from 'next/head';

import Layout from '../components/Layout';
import Balance from '../components/Balance';

const Home = () => (
  <Layout>
    <Head>
      <title>Home | Argon Wallet</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Balance />
  </Layout>
);

export default Home;
