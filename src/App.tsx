
import './App.css'
import MiniNav from './compnents/miniNav/MiniNav'
import Buy from './compnents/buySection/Buy'
import Review from './compnents/rewies/Review'
import Products from './compnents/products/Products'

function App() {
  

  return(
    <div className='bigWrap'>
       <MiniNav/>
       <Buy   images={['sources/t-shirt_pics/image0.png','sources/t-shirt_pics/image1.png','sources/t-shirt_pics/image2.png']}/>
        <Review />
        <Products/>
       </div>
   
  )
}

export default App
