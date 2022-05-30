import React from 'react';
import ReactModal from 'react-modal';
import { Route, Routes } from 'react-router-dom';
import useSound from 'use-sound';
import { CalculatorContainer } from './calculates/calculatorContainer';
import { Focus } from './focus/focus';
import { Portal } from './portal';

ReactModal.setAppElement("#root")

function App() {
  
  
  return (
    <div className='w-full h-full'>
      <Routes>
        <Route path='/' element={<Portal/>}/>
        <Route path="/focus" element={<Focus/>}/>
        <Route path="/calculator" element={<CalculatorContainer/>}/>
      </Routes>
    </div>
  );
}

export default App;
