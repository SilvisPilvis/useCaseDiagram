import './App.css'
import BaseInfo from './components/BaseInfo'
import Izmantosana from './components/Izmantosana'
import UCDBlog from './components/UCDBlog'
import Examples from './components/Examples'
import UMLelementi from './components/UMLelementi'


function App() {
  return (
    <>
      <main>
        <BaseInfo></BaseInfo>
        <Izmantosana></Izmantosana>
        <UMLelementi></UMLelementi>
        <Examples></Examples>
        <UCDBlog></UCDBlog>
      </main> 
    </>
  )
}

export default App
