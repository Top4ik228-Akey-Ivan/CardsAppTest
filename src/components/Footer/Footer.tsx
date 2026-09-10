import React from 'react';
import { Layout } from 'antd';
import './Footer.css';

const { Footer: AntFooter } = Layout;

export interface FooterProps {
  contactEmail?: string;
}

const Footer: React.FC<FooterProps> = ({
  contactEmail = 'contact@example.com',
}) => {
  return (
    <AntFooter className="app-footer">
      <div className="footer-content">
        <span>© 2026 Wordly</span>

        <span>
          Контакты:{' '}
          <a href={`mailto:${contactEmail}`}>
            {contactEmail}
          </a>
        </span>
      </div>
    </AntFooter>
  );
};

export default Footer;