import "./review.css"

const Review = () => {
    const review = [{ stars: "*****", user: "Samantha D", text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt." },
    { stars: "*****", user: "Ethan R", text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt." },
    { stars: "*****", user: "Ava H", text: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter." },
    { stars: "*****", user: "Samantha D", text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt." },
    { stars: "*****", user: "Ethan R", text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt." },
    { stars: "*****", user: "Ava H", text: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter." },
    ]
    return (
        <div className="reviewWrapper">
            <div className="review_title">
                <h1>Rating & Reviews</h1>
            </div>
            <div className="reviewMiniTitle">
                <h2>All Reviews <span>({review.length})</span></h2>
            </div>
            <div className="reviewsContainer">
                {review.map((review,i) => <div className={i<3 ? "review" : "review review2"}>
                    <div className="reviewWrap">
                        <div className="stars">
                            <h1>{review.stars}</h1>
                        </div>
                        <div className="reviewUser">
                            <h1>{review.user}</h1>
                        </div>
                        <div className="reviewText">
                            <p>{review.text}</p>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Review