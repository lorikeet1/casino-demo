import React from 'react';
import DemoAccountInfo from '../components/DemoAccountInfo';
import { useDemoAccount } from '../hooks/useDemoAccount';

const DemoAccountPage: React.FC = () => {
  const { account } = useDemoAccount();

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Demo Account</h1>
      <DemoAccountInfo username={account.username} balance={account.balance} />
      <p className="text-center text-gray-600">This demo account lets you test casino games without real money.</p>
    </div>
  );
};

export default DemoAccountPage;
