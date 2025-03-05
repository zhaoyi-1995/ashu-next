'use client';
import { useCallback, useEffect, useState } from 'react';
import type { MetaMask } from '@web3-react/metamask';
import { hooks } from '@/connector/metaMask';
import { getAddChainParameters } from '@/utils/chains';

const { useChainId, useIsActivating, useIsActive } = hooks;

// 定义 EthereumProvider 类型
interface EthereumProvider {
  request: (args: { method: string; params?: any[] }) => Promise<any>;
}

export function useWalletConnect(connector: MetaMask) {
  const chainId = useChainId();
  const isActivating = useIsActivating();
  const isActive = useIsActive();
  const [error, setError] = useState<Error | undefined>(undefined);
  const [desiredChainId, setDesiredChainId] = useState<number>(0);

  useEffect(() => {
    if (chainId && (!desiredChainId || desiredChainId === -1)) {
      setDesiredChainId(chainId);
    }
  }, [desiredChainId, chainId]);

  const connectWallet = useCallback(
    async (chainId?: number) => {
      // 显式声明类型
      const ethereum = window.ethereum as EthereumProvider | undefined;

      if (!ethereum) {
        setError(new Error('MetaMask is not installed'));
        return;
      }

      const targetChainId = chainId ?? desiredChainId;
      setDesiredChainId(targetChainId);

      try {
        if (targetChainId === chainId || (targetChainId === -1 && chainId !== undefined)) {
          setError(undefined);
          return;
        }

        // 使用显式类型调用 request
        await ethereum.request({ method: 'eth_requestAccounts' });

        if (targetChainId === -1) {
          await connector.activate();
        } else {
          await connector.activate(getAddChainParameters(targetChainId));
        }
        setError(undefined);
      } catch (err) {
        console.error('Failed to connect wallet:', err);
        setError(err as Error);
      }
    },
    [connector, chainId, desiredChainId],
  );

  const disconnectWallet = useCallback(async () => {
    if (connector?.deactivate) {
      await connector.deactivate();
    } else {
      await connector.resetState();
    }
    setDesiredChainId(-1);
    setError(undefined);
  }, [connector]);

  useEffect(() => {
    connector.connectEagerly().catch((err) => {
      console.debug('Failed to connect eagerly to MetaMask:', err);
    });
  }, [connector]);

  return {
    connectWallet,
    disconnectWallet,
    isActivating,
    isActive,
    error,
    chainId: desiredChainId,
    setChainId: setDesiredChainId,
  };
}