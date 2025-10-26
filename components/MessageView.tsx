
import React from 'react';
import { BatIcon } from './Icons';

interface MessageViewProps {
  message: string;
  onBack: () => void;
}

const MessageView: React.FC<MessageViewProps> = ({ message, onBack }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50 p-4">
       <BatIcon className="absolute top-1/4 left-1/4 w-24 h-24 text-gray-800 animate-pulse opacity-50" />
       <BatIcon className="absolute bottom-1/4 right-1/4 w-20 h-20 text-gray-900 animate-pulse delay-300 opacity-50" />

      <div className="text-center bg-gray-900 p-8 md:p-12 rounded-2xl shadow-2xl border border-orange-500/30 max-w-lg w-full">
        <p className="text-2xl md:text-4xl font-bold text-orange-400 mb-8 leading-relaxed">
          {message}
        </p>
        <button
          onClick={onBack}
          className="bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-xl hover:bg-orange-700 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-orange-500/50 transform hover:scale-105"
        >
          Nazaj
        </button>
      </div>
    </div>
  );
};

export default MessageView;
