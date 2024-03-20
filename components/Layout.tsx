import React, { ReactNode } from 'react';
import { MainNav } from './ui/main-nav';
import { UserNav } from './ui/user-nav';
import { Sidebar } from './ui/sidebar';
import Footer from './Footer';

interface ILayout {
  children: ReactNode;
  type: 'main' | 'admin';
  title?: string;
}

const Layout: React.FC<ILayout> = ({ children, type, title }) => {
  const MainLayoutView = () => {
    return (
      <div className="flex flex-col min-h-screen">
        <div className='flex-1'>
          {children}
        </div>
        <Footer />
      </div>
    );
  }

  const AdminLayoutView = () => {
    return (
      <>
        <div className="hidden flex-col md:flex">
          <div className="border-b">
            <div className="flex h-16 items-center px-4">
              <div className='mx-6'>
                <MainNav />
              </div>
              <div className="ml-auto flex items-center space-x-4">
                <UserNav />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
              <div className='hidden lg:block'>
                <Sidebar />
              </div>
              <div className="col-span-3 lg:col-span-4 lg:border-l">
                <div className="flex-1 space-y-4 px-8 py-4">
                  <div className="flex items-center justify-between space-y-2">
                    <h2 className="text-3xl font-semibold tracking-normal">{title || ''}</h2>
                  </div>
                </div>
                <div className="px-4 py-6 lg:px-8">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-orange-50 p-4">
          <span className="text-gray-500">Copyright &copy; 2024 SMM Client Borneos</span>
        </div>
      </>
    );
  }

  switch (type) {
    case 'main':
      return <MainLayoutView />;
    default:
      return <AdminLayoutView />;
  }
};

export default Layout;