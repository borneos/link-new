import React from 'react';
import HeadMain from '@/components/HeadMain';
import images from '@/constant/images';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import LayoutDashboard from '@/components/LayoutDashboard';

export default function Microsite(props) {
  return (
    <>
      <HeadMain
        title="Site - Borneos Link - Buat Link Gratis & QR Code Gratis"
        description="Site - Borneos Link Platform Singkat Link Gartis & QR Code Gratis"
        keyword="borneoslink, shortlink, link gratis, qr gratis"
        ogTitle="Site - Borneos Link - Buat Link Gratis & QR Code Gratis"
        ogDescription="Site - Borneos Link Platform Singkat Link Gartis & QR Code Gratis"
        ogImageUrl={images.OG_IMAGE}
        ogImageAlt="Site - Borneos Link - Buat Link Gratis & QR Code Gratis"
        ogImageType="image/png"
        ogImageHeight="561"
        ogImageWidth="561"
        ogUrl="localhost:3000"
      />
      <Layout type='main'>
        <Header {...props} />
        <LayoutDashboard>
          <div className=''>
            <h1 className='text-gray-700'>Microsite</h1>
          </div>
        </LayoutDashboard>
      </Layout>
    </>
  );
}
