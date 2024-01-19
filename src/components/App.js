import { Navigation } from './navigation/Navigation';

import css from './App.module.css';

export const App = () => {
  return (
    <div className={css['app-null']}>
      <header>
        <Navigation />
      </header>

      <div 
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template !!!
      </div>
      
    </div>
    
  );
};
