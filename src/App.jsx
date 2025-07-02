import './App.css'
import { Categories } from './components/Categories'
import ImageSlider from './components/ImageSlider'
import { MostSellingTees } from './components/MostSellingTees'
import { Navabar } from './components/Navabar'
import { NewArrivals } from './components/NewArrivals'

function App() {

  return (
    <div>
      <Navabar/>
      <ImageSlider/>
      <div className='bg-black text-white text-center w-full stage-wander text-2xl py-6'>unreaviling stich by stich</div>
      <NewArrivals/>
      <Categories/>
      <MostSellingTees/>
    </div>
  )
}

export default App
