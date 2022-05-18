import React, { useReducer } from 'react';
import { GameBox } from './components/gamebox';
import { GameContext, initState } from './operations/GameContext';
import { GameReducer } from './operations/GameReducer';

function App() {

  const [state, dispatch] = useReducer(GameReducer, initState);
  return (
    <div className='w-full h-full'>
      <GameContext.Provider value={{ state, dispatch }}>
        <GameBox />
      </GameContext.Provider>
    </div>
  );
}

export default App;
