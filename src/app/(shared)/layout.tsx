'use client';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header';

function DappLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)  {
  const pathname = usePathname();
  const sharedRoutes = ['/dapp', '/bank', '/state', '/some'];
    return (
      <>
        {sharedRoutes.includes(pathname) && <Header />}
        <main className={sharedRoutes.includes(pathname) ? 'pt-18' : ''}>{children}</main>
      </>
    )
};

export default DappLayout;
