import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector}from 'react-redux'
import { getProduct } from "../redux/actions/product_actions";
import {Row, Col, Image, ListGroup, Card, Button, Form} from 'react-bootstrap'
import ProductRating from "../components/product rating/ProductRating";
import { Link } from "react-router-dom";
import Loader from '../components/spinner/spinner'
import Message from '../components/Message'

const ProductPage = ({history, match}) => {
    const [qty , setQty] = useState(1)

    const dispatch = useDispatch()
    const {isLoading, product, error}= useSelector(state => state.product);

    useEffect(()=>{
        dispatch(getProduct(match.params.id))
    },[dispatch, match])
    
    const addToCartHandler =()=>{
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    return (

        
        < >
        
            <Link className='btn btn-light my-3' to='/'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-circle mx-2" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                </svg> 
                Go Back
            </Link>
            {
                isLoading? 
                <Loader></Loader>
                : error ? 
                <Message variant='danger'>{error}</Message>
                : 
                (
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
                                            {product.countInStock >= 10 ? "in stock" : "in stock (-10)"}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                {
                                    product.countInStock > 0 && (
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Qty:</Col>
                                                <Col>
                                                    <Form.Control as='select'
                                                    value = {qty}
                                                    style={{padding:'0 10%'}}
                                                    onChange={(e)=> setQty(e.target.value)}>
                                                        {[...Array(product.countInStock).keys()].map(x =>(
                                                            <option key={x+1} value={x+1}>
                                                                {x+1}
                                                            </option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>

                                            </Row>
                                        </ListGroup.Item>
                                    )
                                }
                                <ListGroup.Item>
                                    <Row>
                                        <Button disabled={product.countInStock === 0 } className="btn-block" type='button' onClick={addToCartHandler} >Add To Cart</Button>
                                    </Row>
                                </ListGroup.Item>
                                
                                
                            </Card>
                        </Col>
                    </Row>
                )
            }
            
        </>
        
    )
}

export default ProductPage

