import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Main from "./components/Main"
function App() {
  

  return (
    // Start of Navbar
    <div className = 'w-full h-screen bg-gray-100'>
    <Navbar logo="JLPT &copy;" />
    <Main />
    <Footer />
</div>


 
  )
}

export default App
