import React from 'react';
import './Body.css';

export interface BodyProps {
  children: React.ReactNode;
}

const Body: React.FC<BodyProps> = ({ children }) => {
  return (
    <main className="app-body">
      <div className="body-container">
        {children}
      </div>
    </main>
  );
};

export default Body;