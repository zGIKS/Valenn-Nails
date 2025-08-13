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
        scrollbar-color: #E91E63 transparent; /* Firefox */
      }
      
      /* Custom scrollbar for all elements */
      ::-webkit-scrollbar {
        width: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.05);
        border-radius: 4px;
      }
      
      ::-webkit-scrollbar-thumb {
        background: #E91E63;
        border-radius: 4px;
        transition: all 0.2s ease;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: #C2185B;
      }
      
      ::-webkit-scrollbar-thumb:active {
        background: #AD1457;
      }
      
      /* Dark mode scrollbar */
      .dark ::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.08);
      }
      
      .dark ::-webkit-scrollbar-thumb {
        background: #E91E63;
      }
      
      .dark ::-webkit-scrollbar-thumb:hover {
        background: #F06292;
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