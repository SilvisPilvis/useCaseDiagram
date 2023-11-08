import { useState } from 'react'
import './App.css'
import BaseInfo from './components/BaseInfo'
import izmantosana from './components/Izmantosana'
import UCDBlog from './components/UCDBlog'


function App() {
  return (
    <>
      <main>
        <BaseInfo></BaseInfo>
        <Izmantosana></Izmantosana>
        <UCDBlog></UCDBlog>
      </main> 
    </>
  )
}

export default App
