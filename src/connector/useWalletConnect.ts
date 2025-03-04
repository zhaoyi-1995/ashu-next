'use client';
import { useCallback, useEffect, useState } from 'react';
import type { MetaMask } from '@web3-react/metamask';
import { hooks } from '@/connector/metaMask';
import { getAddChainParameters } from '@/utils/chains';

const { useChainId, useIsActivating, useIsActive } = hooks;

export function useWalletConnect(connector: MetaMask) {
  const chainId = useChainId();
  const isActivating = useIsActivating();
  const isActive = useIsActive();
  const [error, setError] = useState<Error | undefined>(undefined);
  const [desiredChainId, setDesiredChainId] = useState<number>(0);

  // 自动更新 desiredChainId
  useEffect(() => {
    if (chainId && (!desiredChainId || desiredChainId === -1)) {
      setDesiredChainId(chainId);
    }
  }, [desiredChainId, chainId]);

  // 切换链或连接钱包
  const connectWallet = useCallback(
    async (chainId?: number) => {
      const targetChainId = chainId ?? desiredChainId;
      setDesiredChainId(targetChainId);

      try {
        if (targetChainId === chainId || (targetChainId === -1 && chainId !== undefined)) {
          setError(undefined);
          return;
        }

        if (targetChainId === -1) {
          await connector.activate();
        } else {
          await connector.activate(getAddChainParameters(targetChainId));
        }
        setError(undefined);
      } catch (err) {
        setError(err as Error);
      }
    },
    [connector, chainId, desiredChainId],
  );

  // 断开钱包
  const disconnectWallet = useCallback(async () => {
    if (connector?.deactivate) {
      await connector.deactivate();
    } else {
      await connector.resetState();
    }
    setDesiredChainId(-1);
    setError(undefined);
  }, [connector]);

  // 自动尝试恢复连接
  useEffect(() => {
    connector.connectEagerly().catch(() => {
      console.debug('Failed to connect eagerly to MetaMask');
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