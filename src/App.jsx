import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ImageSlider from './components/ImageSlider'
import { Navabar } from './components/Navabar'

const NewArrivals = lazy(() => import('./components/NewArrivals'))
const Categories = lazy(() => import('./components/Categories'))
const MostSellingTees = lazy(() => import('./components/MostSellingTees'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))
const ProductPage = lazy(() => import('./components/ProductPage')) // Lazy loading your new product page

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navabar />
        
        <Suspense fallback={<div className='text-center p-10'>Loading...</div>}>
          <Routes>
            {/* Homepage Layout Route */}
            <Route 
              path="/" 
              element={
                <>
                  <ImageSlider />
                  <div className='bg-black text-white text-center w-full stage-wander text-2xl py-6'>
                    unraveling stitch by stitch
                  </div>
                  <NewArrivals />
                  <Categories />
                  <MostSellingTees />
                  <Contact />
                  <Footer />
                </>
              } 
            />

            {/* Product Detail Route */}
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  )
}

export default App