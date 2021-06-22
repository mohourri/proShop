import React from 'react'

const ProductRating = ({ratingValue, reviews, color}) => {
    return (
        <div className='rating'>
            <span>
                 <i style={{color}} className={ratingValue>= 1? 'fas fa-star ':ratingValue>=0.5? 'fas fa-star-half-alt ' : 'far fa-star '}></i>
            </span>
            <span>
                 <i style={{color}} className={ratingValue>= 2? 'fas fa-star ':ratingValue>=1.5? 'fas fa-star-half-alt ' : 'far fa-star '}></i>
            </span>
            <span>
                 <i style={{color}} className={ratingValue>= 3? 'fas fa-star ':ratingValue>=2.5? 'fas fa-star-half-alt ' : 'far fa-star '}></i>
            </span>
            <span>
                 <i style={{color}} className={ratingValue>= 4? 'fas fa-star ':ratingValue>=3.5? 'fas fa-star-half-alt ' : 'far fa-star '}></i>
            </span>
            <span>
                 <i style={{color}} className={ratingValue>= 5? 'fas fa-star ':ratingValue>=4.5? 'fas fa-star-half-alt ' : 'far fa-star '}> </i>
            </span>
            <span>
                {
                    reviews && reviews
                }
            </span>
        </div>
    )
}

ProductRating.defaultProps ={
    color:'grey'
}

export default ProductRating
