import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddTask from './components/Task/AddTask'

function App() {
 

  return (
  
      <section className="bg-white/60   h-screen flex flex-col items-center justify-center gap-4">
       
<AddTask/>

  
      </section>
  
  )
}

export default App
