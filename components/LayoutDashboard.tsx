import React, { ReactNode } from 'react';
import Container from './Container';
import { Separator } from './ui/separator';
import { SidebarNavDashboard } from './SidebarNavDashboard';

interface LayoutDashboarProps {
  // Add your prop types here
  children: ReactNode,
}

const sidebarNavItems = [
  {
    title: "Links",
    href: "/dashboard",
  },
  {
    title: "Microsite",
    href: "/dashboard/microsite",
  },
  
  {
    title: "Analytic",
    href: "/dashboard/analytic",
  }
]

const LayoutDashboard: React.FC<LayoutDashboarProps> = ({ children }) => {
  return (
    <div>
      <Container>
        <div className="py-3 md:py-4 space-y-6 flex content-center">
          <div className='px-3 md:px-0'>
            <h1 className='text-gray-700'>Dashboard</h1>
            <p className="text-sm text-muted-foreground">
              Singkat link tautan anda pada halaman dashboard
            </p>
          </div>
        </div>
        <Separator className='mb-3 md:mb-6' />
        <div className="px-3 md:px-0 flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="lg:w-1/5">
            {/* <SidebarNav items={sidebarNavItems} /> */}
            <SidebarNavDashboard items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </Container>
    </div>
  );
};

export default LayoutDashboard;