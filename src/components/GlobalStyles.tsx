import React from 'react';

const GlobalStyles: React.FC = () => {
  return (
    <style>{`
      html {
        scroll-behavior: smooth;
      }
      
      body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow: overlay;
        scrollbar-width: thin; /* Firefox */
        scrollbar-color: #E91E63 rgba(0, 0, 0, 0.05); /* Firefox */
      }
      
      /* Custom scrollbar for all elements */
      ::-webkit-scrollbar {
        width: 10px;
      }
      
      ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.05);
        border-radius: 8px;
      }
      
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(180deg, #E91E63 0%, #9C27B0 50%, #673AB7 100%);
        border-radius: 8px;
        border: 2px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 2px 8px rgba(233, 30, 99, 0.3);
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(180deg, #C2185B 0%, #8E24AA 50%, #5E35B1 100%);
        box-shadow: 0 4px 12px rgba(233, 30, 99, 0.4);
        transform: scale(1.05);
      }
      
      ::-webkit-scrollbar-thumb:active {
        background: linear-gradient(180deg, #AD1457 0%, #7B1FA2 50%, #512DA8 100%);
      }
      
      /* Dark mode scrollbar */
      .dark ::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
      }
      
      .dark ::-webkit-scrollbar-thumb {
        background: linear-gradient(180deg, #EC4899 0%, #A855F7 50%, #8B5CF6 100%);
        border: 2px solid rgba(0, 0, 0, 0.2);
        box-shadow: 0 2px 8px rgba(236, 72, 153, 0.3);
      }
      
      .dark ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(180deg, #DB2777 0%, #9333EA 50%, #7C3AED 100%);
        box-shadow: 0 4px 12px rgba(236, 72, 153, 0.4);
      }
      
      * {
        box-sizing: border-box;
      }
      
      .contrast-dark-rose {
        color: #E91E63;
      }
      
      .contrast-dark-lilac {
        color: #9C27B0;
      }
      
      .contrast-dark-lavender {
        color: #673AB7;
      }
      
      .contrast-dark-mint {
        color: #00BCD4;
      }
      
      /* Custom animations for performance */
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes fadeInDown {
        from {
          opacity: 0;
          transform: translateY(-30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .animate-fade-in {
        animation: fadeIn 0.8s ease-out forwards;
      }
      
      .animate-fade-in-down {
        animation: fadeInDown 0.6s ease-out forwards;
      }
      
      /* Smooth slide up animation */
      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .animate-slide-up {
        animation: slideUp 0.6s ease-out forwards;
      }
    `}</style>
  );
};

export default GlobalStyles;