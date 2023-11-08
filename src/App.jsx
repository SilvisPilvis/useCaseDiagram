import { useState } from 'react'
import './App.css'
import BaseInfo from './components/BaseInfo'
import UCDBlog from './components/UCDBlog'


function App() {
  return (
    <>
      <main>
        <BaseInfo></BaseInfo>
        <UCDBlog></UCDBlog>
      </main> 
    </>
  )
}

export default App
