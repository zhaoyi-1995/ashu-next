'use client';
import { MetaMask } from '@web3-react/metamask';
import { useWalletConnect } from '@/connector/useWalletConnect';
import { WalletDropdownCard } from '@/components/WalletDropdownCard';

interface WalletButtonProps {
  connector: MetaMask;
}

export function WalletButton({ connector }: WalletButtonProps) {
  const { connectWallet, disconnectWallet, isActivating, isActive, error } =
    useWalletConnect(connector);

  return (
    <div className="relative group">
      {/* 按钮 */}
      <button
        onClick={() => (isActive ? disconnectWallet() : connectWallet())}
        disabled={isActivating}
        className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-md"
      >
        {isActivating
          ? 'Connecting...'
          : isActive
            ? 'Disconnect'
            : error
              ? 'Try Again'
              : 'Connect Wallet'}
        {/* 向下箭头 */}
        <span className="ml-2">▼</span>
      </button>

      {/* 下拉卡片，悬停时显示 */}
      <div className="hidden group-hover:block">
        <WalletDropdownCard connector={connector} />
      </div>
    </div>
  );
}