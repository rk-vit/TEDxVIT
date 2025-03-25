import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import AboutUs from "./components/AboutUs/AboutUs"
import Departments from "./components/Departments/Departments"
import Board from "./components/Board/Board"
import Events from "./components/Events/Events"
import Blog from "./components/Blog/Blog"
import Gallery from "./components/Gallery/Gallery"
import Newsletter from "./components/Newsletter/Newsletter"
import Footer from "./components/Footer/Footer"
import "./App.css"

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Departments />
        <Board />
        <Events />
        <Blog />
        <Gallery />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App

