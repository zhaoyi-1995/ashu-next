import Header from '@/components/Header';
import { memo } from 'react';

function DappLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)  {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  );
};

export default memo(DappLayout);
