import React from 'react';
import { Layout } from 'antd';
import AppRouter from './components/AppRouter/AppRouter';

const App: React.FC = () => {
  return (
    <Layout className="app-layout">
        <AppRouter />
    </Layout>
  );
};

export default App;