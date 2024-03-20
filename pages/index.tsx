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

export default function Home(props) {
  return (
    <>
      <HeadMain
        title="Borneos Link - Buat Link Gratis & QR Code Gratis"
        description="Borneos Link Platform Singkat Link Gartis & QR Code Gratis"
        keyword="borneoslink, shortlink, link gratis, qr gratis"
        ogTitle="Borneos Link - Buat Link Gratis & QR Code Gratis"
        ogDescription="Borneos Link Platform Singkat Link Gartis & QR Code Gratis"
        ogImageUrl={images.OG_IMAGE}
        ogImageAlt="Borneos Link - Buat Link Gratis & QR Code Gratis"
        ogImageType="image/png"
        ogImageHeight="561"
        ogImageWidth="561"
        ogUrl="localhost:3000"
      />
      <Layout type='main'>
        <Header {...props} />
        <Container>
          <div className="h-[35em] md:h-[40em] flex flex-col-reverse md:flex-row gap-3 justify-center items-center justify-items-center content-center">
            <div className="basis-1 md:basis-1/2">
              <h1 className='text-xl md:text-4xl text-gray-600 font-light text-center md:text-left'>Personal Link dan Shortlink gratis untuk kebutuhanmu, buat link disini</h1>
            </div>
            <div className="basis-1 md:basis-1/2 p-[1em] md:p-[2em]">
              <Image
                src={`https://res.cloudinary.com/borneos-co/image/upload/v1709721673/borneos-link/logo/43120_eu8ycg.png`}
                alt='image-landing'
                width='1024'
                height='745'
              />
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
