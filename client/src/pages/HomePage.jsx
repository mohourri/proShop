import React, {useEffect} from 'react'
import {Row, Col, Container} from "react-bootstrap"
import  ProductCard  from "../components/product card/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import  {getProducts} from "../redux/actions/product_actions";
import Loader from '../components/spinner/spinner'
import Message from '../components/Message'

export const Home = () => {
    const dispatch = useDispatch()
    useEffect(()=>{   
        dispatch(getProducts()) 
    },[dispatch])
    const data = useSelector(state => state.productList) 
    const {isLoading, products, error} = data;

    return (
        
        <Container className='my-4 mains'>
            <h1> Latest Products</h1>
            {
                isLoading?<Loader></Loader>:error?<Message variant='danger' >{error}</Message>:
           
            <Row>
                {
                    products.map((product)=>(
                        <Col key={product._id} sm={12}  md={6} lg={4} xl={3}>
                            <ProductCard product={product}/>
                            
                        </Col>
                    ))
                }
            </Row>
            }
        </Container>
    )
}

export default Home;