import React from 'react';

interface DemoAccountInfoProps {
  username: string;
  balance: number;
}

const DemoAccountInfo: React.FC<DemoAccountInfoProps> = ({ username, balance }) => {
  return (
    <div className="p-4 bg-white rounded shadow mb-6">
      <h2 className="text-2xl font-semibold mb-2">Demo Account Info</h2>
      <p>Username: <span className="font-medium">{username}</span></p>
      <p>Balance: <span className="font-medium">${balance}</span></p>
    </div>
  );
};

export default DemoAccountInfo;
