
import React from 'react';

interface IconProps {
  className?: string;
}

export const SpiderIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 10c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4z" />
    <path d="M12 2v8" />
    <path d="M12 18v4" />
    <path d="M4.93 4.93l4.24 4.24" />
    <path d="M14.83 14.83l4.24 4.24" />
    <path d="M4.93 19.07l4.24-4.24" />
    <path d="M14.83 9.17l4.24-4.24" />
    <path d="M2 12h8" />
    <path d="M14 12h8" />
  </svg>
);


export const BatIcon: React.FC<IconProps> = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className={className}
    >
        <path d="M12.152 2.02c.381 0 .749.116 1.065.33.655.441 2.253 1.637 3.483 2.532.553.402 1.205 1.01 1.768 1.413.43.31.956.48 1.488.48h.046c1.155 0 2 .845 2 2 0 .584-.296 1.144-.75 1.5.008.08.019.16.019.241 0 1.948-1.48 3.58-3.334 3.868v3.435c0 1.21-.99 2.2-2.2 2.2a2.2 2.2 0 01-2.2-2.2v-2.028c-.116 0-.23-.01-.343-.023a2.2 2.2 0 01-1.857-2.177v-4.015c-1.853-.288-3.333-1.92-3.333-3.868 0-.08.01-.16.019-.241-.454-.356-.75-.916-.75-1.5 0-1.155.845-2 2-2h.046c.532 0 1.058-.17 1.488-.48.563-.403 1.215-1.01 1.768-1.413 1.23-.895 2.828-2.091 3.483-2.532.316-.214.684-.33 1.065-.33z" />
    </svg>
);

