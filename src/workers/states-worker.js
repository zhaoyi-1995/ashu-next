// workers/states-worker.js
export default {
  async fetch(request) {
    const url = new URL(request.url);

    // 处理 /states 的 SSR
    if (url.pathname === '/states') {
      const mockData = {
        id: 1,
        stateName: 'California',
        population: 39538223,
        timestamp: new Date().toISOString(),
      };
      await new Promise(resolve => setTimeout(resolve, 1000));

      const html = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>States Data (SSR)</title>
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        </head>
        <body class="min-h-screen bg-gray-100 flex items-center justify-center">
          <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
            <h1 class="text-2xl font-bold text-gray-900 mb-4">States Data (SSR via Worker)</h1>
            <div class="p-4 bg-gray-50 rounded-lg">
              <p class="text-gray-700">ID: ${mockData.id}</p>
              <p class="text-gray-700">State Name: ${mockData.stateName}</p>
              <p class="text-gray-700">Population: ${mockData.population}</p>
              <p class="text-gray-700">Timestamp: ${mockData.timestamp}</p>
            </div>
          </div>
        </body>
        </html>
      `;
      return new Response(html, {
        status: 200,
        headers: { 'Content-Type': 'text/html' },
      });
    }

    // 处理 /api/states-data 的 API 请求
    if (url.pathname === '/api/states-data') {
      const mockData = {
        id: 1,
        stateName: 'California',
        population: 39538223,
        timestamp: new Date().toISOString(),
      };
      await new Promise(resolve => setTimeout(resolve, 1000));

      return new Response(JSON.stringify(mockData), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 其他请求转发到 Pages
    return fetch(request);
  },
};