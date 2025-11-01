import './App.css'
import { Categories } from './components/Categories'
import { Contact } from './components/Contact'
import ImageSlider from './components/ImageSlider'
import { MostSellingTees } from './components/MostSellingTees'
import { Navabar } from './components/Navabar'
import { NewArrivals } from './components/NewArrivals'
import { Footer } from './components/Footer'

function App() {

  return (
    <div>
      <Navabar/>
      {/* <div className='flex flex-col mx-10'> */}
      <ImageSlider/>
      <div className='bg-black text-white text-center w-full stage-wander text-2xl py-6'>unreaviling stich by stich</div>
      <NewArrivals/>
      <Categories/>
      <MostSellingTees/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
