import React from 'react';
import DemoGameCard from './DemoGameCard';
import { DemoGame } from '../utils/demoGamesData';

interface DemoGameListProps {
  games: DemoGame[];
  onPlay: (title: string) => void;
}

const DemoGameList: React.FC<DemoGameListProps> = ({ games, onPlay }) => {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {games.map((game) => (
        <DemoGameCard
          key={game.id}
          title={game.title}
          description={game.description}
          onPlay={() => onPlay(game.title)}
        />
      ))}
    </div>
  );
};

export default DemoGameList;
