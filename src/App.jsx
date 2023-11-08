import './App.css'
import BaseInfo from './components/BaseInfo'
import Izmantosana from './components/Izmantosana'
import UCDBlog from './components/UCDBlog'
import Examples from './components/Examples'


function App() {
  return (
    <>
      <main>
        <BaseInfo></BaseInfo>
        <Izmantosana></Izmantosana>
        <Examples></Examples>
        <UCDBlog></UCDBlog>
      </main> 
    </>
  )
}

export default App
