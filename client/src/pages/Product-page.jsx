import React, {useEffect, useState} from 'react'
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import ProductRating from "../components/product rating/ProductRating";
import { Link } from "react-router-dom";
import axios from 'axios'

const ProductPage = ({match}) => {

    const [product, setProduct] = useState([]);

    useEffect(()=>{
        const fetchProduct = async ()=>{
            const {data} = await axios.get(`/api/products/${match.params.id}`)
            setProduct(data);
        }
           
        fetchProduct();
        
    },[match])

    return (
         product._id === match.params.id &&
            < >
            
                <Link className='btn btn-light my-3' to='/'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-circle mx-2" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                    </svg> 
                    Go Back
                </Link>
                <Row className='w-40'>
                    <Col md={5}>
                        <Image className="shadow mb-4 bg-body rounded" src={product.image} alt={product.name} fluid/>
                    </Col>
                    <Col md={4}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h4>{product.name}</h4>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <ProductRating  
                                    ratingValue={product.rating} 
                                    reviews={`${product.numReviews}
                                    reviews`}
                                />
                            </ListGroup.Item>
                            <ListGroup.Item>Price: ${product.price} </ListGroup.Item>
                            <ListGroup.Item>Description: {product.description} </ListGroup.Item>
                        </ListGroup>
                        
                    </Col>
                    <Col md={3}>
                        <Card>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Price:
                                    </Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Status:
                                    </Col>
                                    <Col>
                                        {product.countInStock > 0 ? product.countInStock +" In Stock " : "Out Of Stock"}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Button disabled={product.countInStock === 0 } className="btn-block" type='button' >Add To Cart</Button>
                                </Row>
                            </ListGroup.Item>
                        </Card>
                    </Col>
                </Row>
            </>
        
    )
}

export default ProductPage

