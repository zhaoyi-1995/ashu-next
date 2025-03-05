export async function GET() {
  const mockData = {
    id: 1,
    stateName: 'California',
    population: 39538223,
    timestamp: new Date().toISOString(),
  };

  // 模拟延迟（可选）
  await new Promise(resolve => setTimeout(resolve, 1000));

  return new Response(JSON.stringify(mockData), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}