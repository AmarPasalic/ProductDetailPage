import "./products.css"

const Products = () => {
    const prod = [{ img: "sources/t-shirt_pics/image7.png", title: "Polo with Contrast Trims", stars: "*****", price: "$260", idDiscounted: true, discount: "-20%", fullPrice: "$300" },
    { img: "sources/t-shirt_pics/image8.png", title: "Gradient Graphic T-shirt", stars: "*****", price: "$145", idDiscounted: false, },
    { img: "sources/t-shirt_pics/image9.png", title: "Polo with Tipping Details", stars: "*****", price: "$180", idDiscounted: false, },
    { img: "sources/t-shirt_pics/image10.png", title: "Black Striped T-shirt", stars: "*****", price: "$120", idDiscounted: true, discount: "-30%", fullPrice: "$150" },
    ]
    return (
        <div className="ProductsContainer">
            <div className="productsTitle">
                <h1>You might also like</h1>
            </div>
            <div className="products1">
                {prod.map((product) => <div className="product">
                    <div className="productImage">
                        <img src={product.img} />
                    </div>
                    <div className="product1Text">
                        <div className="productName">
                            <h3>{product.title}</h3>
                        </div>
                        <div className="productStars">
                            <h4>{product.stars} <span>{product.stars.length}/5</span></h4>
                        </div>
                        <div className="productPrice">
                            <h4>{product.price}</h4>
                            {product.idDiscounted && <div className="Productdiscount">
                                <h6>{product.fullPrice}</h6>
                                <div className="productDiscounted"><h5>{product.discount}</h5></div>
                            </div>}
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Products