import React from 'react';
import ReactModal from 'react-modal';
import { Route, Routes } from 'react-router-dom';

import { CalculatorContainer } from './calculates/calculatorContainer';
import { Focus } from './focus/focus';
import { Pinyin } from './pinyin/pinyin';
import { Portal } from './portal';
import { Test } from './test';

ReactModal.setAppElement("#root")

function App() {
  
  return (
    <div className='w-full h-full'>
      <Routes>
        <Route path='/' element={<Portal/>}/>
        <Route path="/focus" element={<Focus/>}/>
        <Route path="/calculator" element={<CalculatorContainer/>}/>
        <Route path='/pinyin' element={<Pinyin/>}/>
        <Route path='/test' element={<Test/>}/>
      </Routes>
    </div>
  );
}

export default App;
