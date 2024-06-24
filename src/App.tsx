
import './App.css'
import MiniNav from './compnents/miniNav/MiniNav'
import Buy from './compnents/buySection/Buy'

function App() {
  const pictures=['sources/t-shirt_pics/image0.png','sources/t-shirt_pics/image1.png','sources/t-shirt_pics/image2.png']
 

  return(
    <div className='bigWrap'>
       <MiniNav/>
       <Buy   images={pictures}/>
       </div>
   
  )
}

export default App
