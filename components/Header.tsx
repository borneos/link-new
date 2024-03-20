'use client'

import React, { ReactNode } from 'react';
import { Button } from './ui/button';
import Container from './Container';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';
import { UserNav } from './UserNav';
import Link from 'next/link';


interface HeaderProps {
  isMobile?: boolean
}

const Header: React.FC<HeaderProps> = (props) => {
  const { isMobile }:HeaderProps = props;
  const { data } = useSession();
  return (
    <div className='border-b'>
      <Container>
        <div className='p-3 flex items-center justify-between'>
          <Link href={'/'}>
            <Image 
              src={`https://res.cloudinary.com/borneos-co/image/upload/v1709720891/borneos-link/logo/borneoslink_zzmllq.svg`}
              alt='logo-borneos-link'
              width='100'
              height='50'
            />
          </Link>
          <div className='flex gap-2 items-center'>
            {data ? 
              <UserNav />
            : <>
              <Button onClick={() => signIn()} size={isMobile ? 'sm' : 'md'} variant={`secondary`}>Masuk</Button>
            </>
            }
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;