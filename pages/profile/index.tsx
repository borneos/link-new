import React from 'react';
import HeadMain from '@/components/HeadMain';
import { MainNav } from '@/components/ui/main-nav';
import { Sidebar } from '@/components/ui/sidebar';
import images from '@/constant/images';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import Container from '@/components/Container';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Profile(props) {
  return (
    <>
      <HeadMain
        title="Profile - Borneos Link - Buat Link Gratis & QR Code Gratis"
        description="Profile - Borneos Link Platform Singkat Link Gartis & QR Code Gratis"
        keyword="borneoslink, shortlink, link gratis, qr gratis"
        ogTitle="Profile - Borneos Link - Buat Link Gratis & QR Code Gratis"
        ogDescription="Profile - Borneos Link Platform Singkat Link Gartis & QR Code Gratis"
        ogImageUrl={images.OG_IMAGE}
        ogImageAlt="Profile - Borneos Link - Buat Link Gratis & QR Code Gratis"
        ogImageType="image/png"
        ogImageHeight="561"
        ogImageWidth="561"
        ogUrl="localhost:3000"
      />
      <Layout type='main'>
        <Header {...props} />
        <Container>
          <div className=''>Profile</div>
        </Container>
      </Layout>
    </>
  );
}
