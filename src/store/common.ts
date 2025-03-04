import { create } from 'zustand';

// 定义状态和方法的类型
interface WalletState {
  isConnected: boolean;
  toggleConnection: () => void;
}

export const useWalletStore = create<WalletState>((set) => ({
  isConnected: false,
  toggleConnection: () => set((state) => ({ isConnected: !state.isConnected })),
}));