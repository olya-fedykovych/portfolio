import'./App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import TechStack from './components/TechStack/TechStack'


function App() {
  return (
    <div className={App}>
      <Header />
      <Hero />
      <TechStack />
      <Projects />
      <Footer />
    </div>
  )
}

export default App;
