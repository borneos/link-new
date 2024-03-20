import React from 'react';
import Container from './Container';

interface FooterProps {
  // Add your prop types here
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className='bg-gray-100 w-100 p-3'>
      <Container>
        <div className="grid md:flex flex-row">
          <div className="basis-1/2">
            <p className='text-xs md:text-md text-gray-500'>Borneos Link © 2024, Made with ❤️ &nbsp;Technology Team Borneos</p>
          </div>
          <div className="basis-1/2 flex">

          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;