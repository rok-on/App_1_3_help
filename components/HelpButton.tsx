
import React from 'react';

interface HelpButtonProps {
  id: number;
  onClick: (id: number) => void;
  isUnlocked: boolean;
  positionClasses: string;
}

const HelpButton: React.FC<HelpButtonProps> = ({ id, onClick, isUnlocked, positionClasses }) => {
  const baseClasses =
    'w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center font-bold text-lg md:text-xl transform transition-all duration-300 ease-in-out shadow-lg focus:outline-none focus:ring-4';

  const unlockedClasses =
    'bg-orange-500 text-white border-2 border-orange-300 cursor-default shadow-orange-500/50';
  
  const lockedClasses =
    'bg-gray-800 text-gray-400 border-2 border-gray-600 hover:bg-gray-700 hover:scale-110 hover:shadow-2xl focus:ring-gray-500';

  return (
    <button
      onClick={() => onClick(id)}
      disabled={isUnlocked}
      className={`${baseClasses} ${isUnlocked ? unlockedClasses : lockedClasses} ${positionClasses}`}
    >
      Pomoč
    </button>
  );
};

export default HelpButton;
