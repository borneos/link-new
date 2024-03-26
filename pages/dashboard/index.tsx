import React from 'react';
import HeadMain from '@/components/HeadMain';
import images from '@/constant/images';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { usePostGet } from '@/hooks/usePostsGet';
import LayoutDashboard from '@/components/LayoutDashboard';

export default function Dashboard(props) {
  const {data, isLoading, error} = usePostGet();
  return (
    <>
      <HeadMain
        title="Dashboard - Borneos Link - Buat Link Gratis & QR Code Gratis"
        description="Dashboard - Borneos Link Platform Singkat Link Gartis & QR Code Gratis"
        keyword="borneoslink, shortlink, link gratis, qr gratis"
        ogTitle="Dashboard - Borneos Link - Buat Link Gratis & QR Code Gratis"
        ogDescription="Dashboard - Borneos Link Platform Singkat Link Gartis & QR Code Gratis"
        ogImageUrl={images.OG_IMAGE}
        ogImageAlt="Dashboard - Borneos Link - Buat Link Gratis & QR Code Gratis"
        ogImageType="image/png"
        ogImageHeight="561"
        ogImageWidth="561"
        ogUrl="localhost:3000"
      />
      <Layout type='main'>
        <Header {...props} />
        <LayoutDashboard>
          <div className=''>
            <h1 className='text-gray-700'>Post</h1>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">#</TableHead>
                  <TableHead>Prefix</TableHead>
                  <TableHead>Values</TableHead>
                  <TableHead>URL</TableHead>
                  <TableHead>Visited</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data?.data?.map((post) => (
                  <TableRow key={post.id} className=''>
                    <TableCell className="font-medium">{post.id}</TableCell>
                    <TableCell>{post.prefix}</TableCell>
                    <TableCell>{post.values}</TableCell>
                    <TableCell>{post.url}</TableCell>
                    <TableCell>{post.visited}</TableCell>
                    <TableCell className="text-right">Edit | Delete</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </LayoutDashboard>
      </Layout>
    </>
  );
}
