import { useState } from 'react';

interface DemoAccount {
  balance: number;
  username: string;
}

export const useDemoAccount = () => {
  const [account, setAccount] = useState<DemoAccount>({
    username: 'DemoUser123',
    balance: 1000,
  });

  const updateBalance = (amount: number) => {
    setAccount((prev) => ({ ...prev, balance: prev.balance + amount }));
  };

  return { account, updateBalance };
};
