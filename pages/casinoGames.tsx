import React from 'react';
import DemoGameCard from '../components/DemoGameCard';
import { demoGames } from '../utils/demoGamesData';
import { useDemoAccount } from '../hooks/useDemoAccount';

const CasinoGamesPage: React.FC = () => {
  const { account, updateBalance } = useDemoAccount();

  const playGame = (gameTitle: string) => {
    alert(`Playing demo game: ${gameTitle}`);
    // Simulate win/loss
    const win = Math.random() > 0.5;
    updateBalance(win ? 100 : -50);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Demo Casino Games</h1>
      <div className="mb-6 p-4 bg-white rounded shadow">
        <p className="text-lg">Demo Account: <span className="font-semibold">{account.username}</span></p>
        <p className="text-lg">Balance: <span className="font-semibold">${account.balance}</span></p>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {demoGames.map((game) => (
          <DemoGameCard
            key={game.id}
            title={game.title}
            description={game.description}
            onPlay={() => playGame(game.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default CasinoGamesPage;
