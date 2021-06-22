import React, {useEffect, useState} from 'react'
import {Row, Col, Container} from "react-bootstrap"
import  ProductCard  from "../components/product card/ProductCard";
import axios from "axios";

export const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const fetchProducts = async ()=>{
            const {data} = await axios.get('/api/products')
            setProducts(data);
        }
           
        fetchProducts();
        
    },[])

    return (
        <Container className='my-4 mains'>
            <h1> Latest Products</h1>
            <Row>
                {
                    products.map(product=>(
                        <Col sm={12}  md={6} lg={4} xl={3}>
                            <ProductCard product={product}/>
                            
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Home;