'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useWalletStore } from '@/store/common';

const Header = () => {
  const { isConnected, toggleConnection } = useWalletStore();
  const pathname = usePathname();
  const getLinkClass = (path: string) =>
    pathname === path
      ? 'text-indigo-400'
      : 'text-white hover:text-indigo-400';

  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-gray-900/90 backdrop-blur-md text-white z-10">
      <Link href="/" className="text-2xl md:text-3xl font-bold tracking-tight hover:text-indigo-400 transition-colors duration-300">
        MyLogo
      </Link>
      <nav className="flex space-x-6 md:space-x-8">
        <Link href="/dapp" className={`text-lg font-medium transition-colors duration-300 ${getLinkClass('/dapp')}`}>
          DApp
        </Link>
        <Link href="/bank" className={`text-lg font-medium transition-colors duration-300 ${getLinkClass('/bank')}`}>
          Bank
        </Link>
      </nav>
      <button
        onClick={toggleConnection}
        className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-md"
      >
        {isConnected ? 'Disconnect Wallet' : 'Connect Wallet'}
      </button>
    </header>
  );
};

export default Header;