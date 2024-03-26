import React from 'react';
import HeadMain from '@/components/HeadMain';
import images from '@/constant/images';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import LayoutDashboard from '@/components/LayoutDashboard';

export default function Analytic(props) {
  return (
    <>
      <HeadMain
        title="Analytic - Borneos Link - Buat Link Gratis & QR Code Gratis"
        description="Analytic - Borneos Link Platform Singkat Link Gartis & QR Code Gratis"
        keyword="borneoslink, shortlink, link gratis, qr gratis"
        ogTitle="Analytic - Borneos Link - Buat Link Gratis & QR Code Gratis"
        ogDescription="Analytic - Borneos Link Platform Singkat Link Gartis & QR Code Gratis"
        ogImageUrl={images.OG_IMAGE}
        ogImageAlt="Analytic - Borneos Link - Buat Link Gratis & QR Code Gratis"
        ogImageType="image/png"
        ogImageHeight="561"
        ogImageWidth="561"
        ogUrl="localhost:3000"
      />
      <Layout type='main'>
        <Header {...props} />
        <LayoutDashboard>
          <div className=''>
            <h1 className='text-gray-700'>Analytic</h1>
          </div>
        </LayoutDashboard>
      </Layout>
    </>
  );
}
