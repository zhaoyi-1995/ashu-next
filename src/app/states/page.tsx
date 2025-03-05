import { headers } from 'next/headers'; // 用于触发动态渲染

async function fetchStatesData() {
  // 在服务器端调用 mock API
  const response = await fetch((process.env.NEXT_PUBLIC_BASE_URL || '') + '/api/states-data', {
    cache: 'no-store', // 确保每次请求都获取最新数据
  });
  if (!response.ok) throw new Error('Failed to fetch states data');
  return response.json();
}

export default async function StatesPage() {
  // 强制动态渲染（触发 SSR）
  headers(); // 确保页面不在构建时静态化

  let data;
  let error;

  try {
    data = await fetchStatesData();
  } catch (err) {
    error = err instanceof Error ? err.message : 'Unknown error'; // 类型检查
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg text-gray-900">
        <h1 className="text-2xl font-bold mb-4">测试SSR</h1>
        {error && <p className="text-red-600">Error: {error}</p>}
        {data ? (
          <div className="p-4 bg-gray-50 rounded-lg text-gray-700">
            <p>ID: {data.id}</p>
            <p>名称: {data.stateName}</p>
            <p>欢迎: {data.population}</p>
            <p>时间: {data.timestamp}</p>
          </div>
        ) : (
          !error && <p className="text-blue-600">Loading...</p>
        )}
      </div>
    </div>
  );
}

// 强制动态渲染（禁用静态优化）
export const dynamic = 'force-dynamic';