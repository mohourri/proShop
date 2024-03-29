import React from 'react'
import {  Card } from "react-bootstrap";
import ProductRating from '../product rating/ProductRating';
//import { Link } from "react-router-dom";

const ProductCard = ({product}) => {
    return (
        <Card className="shadow p-2 mb-4 bg-body rounded">
            <a  href={`/product/${product._id}`}>
                <Card.Img className='rounded' src = {product.image} variant='top'/>
            </a>
            <Card.Body>
                <a href={`/product/${product._id}`}>
                    <Card.Text >
                        {
                            product.name
                        }
                    </Card.Text>
                </a>

                <Card.Text as="div">
                    <ProductRating ratingValue={product.rating} reviews={' '+product.numReviews +' reviews'} />
                </Card.Text>
                <Card.Text as="h3">
                    ${product.price}
                </Card.Text>
                

            </Card.Body>
        </Card>
    )
}

export default ProductCard
