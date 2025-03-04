import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center dynamic-bg text-white">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-wide drop-shadow-lg text-animate">
        For Future
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-12 font-light text-animate" style={{ animationDelay: '0.3s' }}>
        Discover the Next Frontier
      </p>
      <div className="flex space-x-6">
        <Link
          href="/dapp"
          className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-md"
        >
          Dapp
        </Link>
        <Link
          href="/states"
          className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-md"
        >
          States
        </Link>
      </div>
    </div>
  );
}