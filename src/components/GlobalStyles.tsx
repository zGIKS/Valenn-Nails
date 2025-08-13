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
        /* Hide default scrollbar on all browsers */
        overflow: overlay;
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* IE and Edge */
      }
      
      /* Hide default scrollbar for WebKit browsers */
      body::-webkit-scrollbar {
        display: none;
      }
      
      /* Ensure only our custom scrollbar shows */
      html::-webkit-scrollbar {
        width: 8px;
      }
      
      html::-webkit-scrollbar-track {
        background: transparent;
      }
      
      html::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #ffd6cc, #e6e6fa);
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      
      html::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(to bottom, #ffc0cb, #dda0dd);
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
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
    `}</style>
  );
};

export default GlobalStyles;