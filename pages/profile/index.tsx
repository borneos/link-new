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
import { Separator } from '@/components/ui/separator';

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
          <div className="py-3 md:py-4 space-y-6 flex content-center">
            <div className='px-3 md:px-0'>
              <h3 className="text-lg font-medium">Profile</h3>
            </div>
          </div>
          <Separator />
        </Container>
      </Layout>
    </>
  );
}
