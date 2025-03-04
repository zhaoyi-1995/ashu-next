import Header from '@/components/Header';

function DappLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)  {
  return (
    <>
      <Header />
      <main className='pt-18'>
        {children}
      </main>
    </>
  );
};

export default DappLayout;
