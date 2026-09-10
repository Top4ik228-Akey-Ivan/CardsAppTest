import React from 'react';
import { Layout } from 'antd';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Body from '../Body/Body';
import { useAppSelector } from '../../store/hooks';

export interface PageProps {
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({
  children
}) => {
  const user = useAppSelector((state) => state.auth.user);
  return (
    <Layout className="page">
      <Header username={user?.username} />

      <Body>
        {children}
      </Body>

      <Footer contactEmail="support@wordly.com" />
    </Layout>
  );
};

export default Page;