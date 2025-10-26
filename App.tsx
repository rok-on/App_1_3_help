import React, { useState, useEffect } from 'react';
import { HINTS } from './constants.ts';
import HelpButton from './components/HelpButton.tsx';
import MessageView from './components/MessageView.tsx';
import { SpiderIcon, BatIcon } from './components/Icons.tsx';

// Configuration for button positions to prevent overlapping
const buttonPositions = [
  { id: 1, positionClasses: 'absolute top-[10%] left-[10%]' },
  { id: 2, positionClasses: 'absolute top-[10%] right-[10%]' },
  { id: 3, positionClasses: 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' },
  { id: 4, positionClasses: 'absolute bottom-[10%] left-[10%]' },
  { id: 5, positionClasses: 'absolute bottom-[10%] right-[10%]' },
];


export default function App() {
  const [unlockedLevel, setUnlockedLevel] = useState<number>(0);
  const [activeHintId, setActiveHintId] = useState<number | null>(null);
  const [feedbackMessage, setFeedbackMessage] = useState<string>('');
  const [showFinalMessage, setShowFinalMessage] = useState<boolean>(false);

  useEffect(() => {
    if (feedbackMessage) {
      const timer = setTimeout(() => {
        setFeedbackMessage('');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [feedbackMessage]);

  const handleButtonClick = (id: number) => {
    if (id === unlockedLevel + 1) {
      setActiveHintId(id);
      setFeedbackMessage('');
    } else {
      setFeedbackMessage('Malo se še potrudi!');
    }
  };

  const handleBack = () => {
    if (activeHintId !== null) {
      setUnlockedLevel(activeHintId);
      setActiveHintId(null);
      if (activeHintId === 5) {
        setShowFinalMessage(true);
      }
    }
  };

  if (activeHintId !== null) {
    return (
      <MessageView
        message={HINTS[activeHintId - 1]}
        onBack={handleBack}
      />
    );
  }

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      <BatIcon className="absolute top-5 left-5 w-16 h-16 text-gray-700 animate-pulse" />
      <BatIcon className="absolute top-10 right-10 w-12 h-12 text-gray-800 animate-pulse delay-500" />
      <SpiderIcon className="absolute bottom-5 right-5 w-20 h-20 text-gray-600" />
      <SpiderIcon className="absolute bottom-1/2 left-2 w-10 h-10 text-gray-700" />


      <header className="z-10 text-center mb-10">
        <h1 className="font-creepster text-5xl md:text-7xl text-orange-500 tracking-wider" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
          Pomoč za bumbarje!
        </h1>
      </header>
      
      <main className="relative w-full max-w-2xl h-96 z-10">
        {buttonPositions.map(({ id, positionClasses }) => (
          <HelpButton
            key={id}
            id={id}
            onClick={handleButtonClick}
            isUnlocked={id <= unlockedLevel}
            positionClasses={positionClasses}
          />
        ))}
      </main>

      <footer className="z-10 h-20 mt-6 text-center">
        {feedbackMessage && (
          <p className="text-red-500 text-2xl font-bold animate-bounce">
            {feedbackMessage}
          </p>
        )}
        {showFinalMessage && (
           <p className="text-green-400 text-2xl font-bold p-4 bg-black bg-opacity-50 rounded-lg shadow-lg">
            Nič več nimam za povedat, idi naprej!
          </p>
        )}
      </footer>
    </div>
  );
}
