// app/components/Header.tsx
'use client'; // 因为使用了 usePathname，需要标记为客户端组件

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const TestHeader = () => {
  const pathname = usePathname(); // 获取当前路由路径，替代 useLocation

  // 定义导航项
  const navItems = [
    { path: '/test/immer', label: 'Immer' },
    { path: '/test/state', label: 'State' },
    { path: '/test/jotai', label: 'Jotai' },
  ];

  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo 或标题 */}
        <div className="text-xl font-bold">
          <Link href="/" className="hover:text-blue-300">
            My App
          </Link>
        </div>

        {/* 导航链接 */}
        <ul className="flex space-x-6">
          {navItems.map(item => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`px-3 py-2 rounded-md transition-colors ${
                  pathname === item.path
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-gray-700 hover:text-blue-300'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default TestHeader;