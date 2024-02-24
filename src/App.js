import'./App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Decarto from './components/Projects/Decarto/Decarto'
import MFB from './components/Projects/MFB/MFB'
import Projects from './components/Projects/Projects'
import Sauna from './components/Projects/Sauna/Sauna'
import TechStack from './components/TechStack/TechStack'


function App() {
  return (
    <div className={App}>
      <Header />
      <Hero />
      <TechStack />
      <Decarto />
      <MFB />
      <Sauna />
      <Footer />
    </div>
  )
}

export default App;
