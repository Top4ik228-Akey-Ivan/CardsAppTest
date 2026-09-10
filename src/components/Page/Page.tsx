import React from 'react';
import { Layout } from 'antd';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Body from '../Body/Body';

export interface PageProps {
  children: React.ReactNode;
  username?: string;
}

const Page: React.FC<PageProps> = ({
  children,
  username = 'Admin',
}) => {
  return (
    <Layout className="page">
      <Header username={username} />

      <Body>
        {children}
      </Body>

      <Footer contactEmail="support@wordly.com" />
    </Layout>
  );
};

export default Page;