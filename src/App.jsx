import './App.css'
import { About } from './Components/About'
import { Hero } from './Components/Hero'
import { Navbar } from './Components/Navbar'
import { Project } from './Components/Project'
import { Skill } from './Components/Skill'
import { Contact } from './Contact'
function App() {

 
  return (
   
  <div className="App">
   
    <Navbar/>
    <Hero/>
    <About/>
    <Skill/>
    <Project/>
    <Contact/>

  </div>
    

    

  )
}

export default App
