export const formatContractAddress = (address: string): string | null => {
  // 去除地址两边的空格
  address = address.trim();

  // 检查地址是否以 '0x' 开头，如果不是则添加
  if (!address.startsWith('0x')) {
    address = '0x' + address;
  }

  // 检查地址是否是 42 个字符（'0x' + 40 个十六进制字符）
  if (address.length !== 42 || !/^0x[a-fA-F0-9]{40}$/.test(address)) {
    return null; // 返回 null 表示地址格式不正确
  }

  // 将地址转为小写
  const lowercaseAddress = address.toLowerCase();

  // 格式化：保留 '0x' 前缀 + 前 6 个字符 + '...' + 后 6 个字符
  const prefix = lowercaseAddress.slice(0, 8); // '0x' + 前 6 个字符
  const suffix = lowercaseAddress.slice(-6); // 后 6 个字符
  return `${prefix}...${suffix}`;
};