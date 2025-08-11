export interface DemoGame {
    id: string;
    title: string;
    description: string;
  }
  
  export const demoGames: DemoGame[] = [
    {
      id: 'slot-777',
      title: 'Lucky Slots 777',
      description: 'Spin the reels and try your luck with 777 jackpots!',
    },
    {
      id: 'roulette',
      title: 'Roulette Classic',
      description: 'Place your bets and watch the wheel spin.',
    },
    {
      id: 'blackjack',
      title: 'Blackjack Table',
      description: 'Beat the dealer without busting!',
    },
  ];
  