'use client';
import type { MetaMask } from '@web3-react/metamask';
import { useWalletConnect } from '@/connector/useWalletConnect';
import { CHAINS } from '@/utils/chains';
import { Accounts } from '@/components/WalletAccount';
import { Status } from '@/components/WalletStatus';
import { hooks } from '@/connector/metaMask';

const { useAccounts, useProvider, useENSNames } = hooks;

interface WalletDropdownCardProps {
  connector: MetaMask;
}

export function WalletDropdownCard({ connector }: WalletDropdownCardProps) {
  const { chainId, setChainId, isActivating, isActive, error } = useWalletConnect(connector);
  const accounts = useAccounts();
  const provider = useProvider();
  const ENSNames = useENSNames();

  const chainIds = Object.keys(CHAINS).map(Number);

  return (
    <div className="absolute right-0 mt-0 w-64 bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-4 z-10 text-white">
      {/* 连接状态 */}
      <div className="mb-2">
        <Status isActivating={isActivating} isActive={isActive} error={error} />
      </div>

      {/* 账户信息 */}
      <div className="mb-2">
        <Accounts accounts={accounts} provider={provider} ENSNames={ENSNames} />
      </div>

      {/* 切换链 */}
      <select
        value={chainId || -1}
        onChange={(e) => setChainId(Number(e.target.value))}
        className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value={-1}>Default</option>
        {chainIds.map((id) => (
          <option key={id} value={id} className="bg-gray-700 text-white">
            {CHAINS[id]?.name ?? id}
          </option>
        ))}
      </select>
    </div>
  );
}