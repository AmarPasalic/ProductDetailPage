import './buy.css'
import { useState } from 'react'
interface BuyProps {
    images: string[]
}
const Buy = ({ images }: BuyProps) => {
    const [index, setIndex] = useState(0)
    return (
        <div className='productWrapper'>
            <div className="productImages">
                <div className="smallerProductImages">
                    {images.map((image, i) => <img className={index === i ? 'active' : ''} onClick={() => {
                        setIndex(i)

                    }} src={image} />)}
                </div>
                <div className="bigProductImage">
                    <img src={images[index]} />
                </div>
            </div>
            <div className="productText">
                <div className="title">
                    <h1>One Life Graphic T-shirt</h1>
                </div>
                <div className="stars">
                    <h1>*****</h1>
                    <h2>4.5/5</h2>
                </div>
                <div className="price">
                    <h1>$260  <span>$300</span></h1>
                    <div className="discount">
                        <h6>-40%</h6>
                    </div>
                </div>
                <div className="description">
                    <p>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style</p>
                </div>
                <div className="color">
                    <h5>Select Colors</h5>
                    <div className="colors">
                        <div id='color11' className="color1"></div>
                        <div id='color22' className="color1"></div>
                        <div id='color33' className="color1"></div>
                    </div>
                </div>
                <div className="buy_button">
                    <h1>Buy</h1>
                </div>
            </div>
        </div>
    )
}

export default Buy