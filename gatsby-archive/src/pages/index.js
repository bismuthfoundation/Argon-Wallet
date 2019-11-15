import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Balance from '../components/Balance';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Balance />
  </Layout>
);

export default IndexPage;
