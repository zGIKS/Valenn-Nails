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