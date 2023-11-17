import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Main from "./components/Main"
import Program from "./components/program"
import About from "./components/about"
import Projects from "./components/projects"
function App() {
  

  return (
    // Start of Navbar
    <div className = 'w-screen h-screen bg-gray-100'>
    <Navbar logo="JLPT &copy;" />
    <Main />
    <Projects />
    <About />
    <Program />
    <Footer />
</div>


 
  )
}

export default App
