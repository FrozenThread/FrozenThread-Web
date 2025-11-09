import { lazy, Suspense } from 'react'
import './App.css'
import ImageSlider from './components/ImageSlider'
import { Navabar } from './components/Navabar'

const NewArrivals = lazy(() => import('./components/NewArrivals'))
const Categories = lazy(() => import('./components/Categories'))
const MostSellingTees = lazy(() => import('./components/MostSellingTees'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  return (
    <div>
      <Navabar/>
      <ImageSlider/>
      <div className='bg-black text-white text-center w-full stage-wander text-2xl py-6'>unraveling stitch by stitch</div>

      {/* Suspense handles the "loading" state while the lazy components are fetched */}
      <Suspense fallback={<div className='text-center p-10'>Loading...</div>}>
        <NewArrivals/>
        <Categories/>
        <MostSellingTees/>
        <Contact/>
        <Footer/>
      </Suspense>
      
    </div>
  )
}

export default App