import React from 'react';

interface DemoGameCardProps {
  title: string;
  description: string;
  onPlay: () => void;
}

const DemoGameCard: React.FC<DemoGameCardProps> = ({ title, description, onPlay }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer bg-white">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button
        onClick={onPlay}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Play Demo
      </button>
    </div>
  );
};

export default DemoGameCard;
