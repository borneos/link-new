import React from 'react';
import HeadMain from '@/components/HeadMain';
import images from '@/constant/images';
import Image from 'next/image';
import FormRegister from '@/components/FormRegister';
import Link from 'next/link';
import { cn } from '@/libs/utils';
import { buttonVariants } from '@/components/ui/button';

export default function Register(props) {
  return (
    <>
      <HeadMain
        title="Login - Borneos Link - Buat Link Gratis & QR Code Gratis"
        description="Login - Borneos Link Platform Singkat Link Gartis & QR Code Gratis"
        keyword="borneoslink, shortlink, link gratis, qr gratis"
        ogTitle="Login - Borneos Link - Buat Link Gratis & QR Code Gratis"
        ogDescription="Login - Borneos Link Platform Singkat Link Gartis & QR Code Gratis"
        ogImageUrl={images.OG_IMAGE}
        ogImageAlt="Login - Borneos Link - Buat Link Gratis & QR Code Gratis"
        ogImageType="image/png"
        ogImageHeight="561"
        ogImageWidth="561"
        ogUrl="localhost:3000"
      />
      <div className="container relative h-[100vh] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className='absolute left-8 top-3 md:left-8 md:top-6'>
          <Link href={'/'}>
            <Image 
              src={`https://res.cloudinary.com/borneos-co/image/upload/v1709720891/borneos-link/logo/borneoslink_zzmllq.svg`}
              alt='logo-borneos-link'
              width='80'
              height='30'
            />
          </Link>
        </div>
        <Link
          href="/login"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Masuk
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-hero-register bg-center" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Link href={'/'}>
              <Image 
                src={`https://res.cloudinary.com/borneos-co/image/upload/v1709720891/borneos-link/logo/borneoslink_zzmllq.svg`}
                alt='logo-borneos-link'
                width='100'
                height='50'
              />
            </Link>
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Borneos Link adalah aplikasi yang memungkinkan pengguna untuk membuat tautan singkat dan menghasilkan kode QR, memberikan kemudahan bagi pelaku UMKM dan siapa pun yang ingin berbagi tautan dengan cepat dan efisien.&rdquo;
              </p>
              <footer className="text-sm">Borneos Tech Team</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="pt-[8em] md:pt-0 mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Daftar Akun
              </h1>
              <p className="text-sm text-muted-foreground">
                Silakan input email dan password akun anda
              </p>
            </div>
            <FormRegister children={''} />
          </div>
        </div>
      </div>
    </>
  );
}
