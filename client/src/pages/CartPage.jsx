import { useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {Col, Row, ListGroup, Image, Form, Button, Card} from 'react-bootstrap'
import {addCartItem} from '../redux/actions/cart_actions'
import Message from '../components/Message'
import {removeItem} from '../redux/actions/cart_actions'

const CartPage = ({match, location, history}) => {
    
    const id = match.params.id
    const qty= location.search ? Number(location.search.split('=')[1]) : 1
    const dispatch = useDispatch()

    const cart = useSelector(state=> state.cart)
    var {cartItems} = cart
    useEffect(()=>{
        dispatch(addCartItem(id, qty))
    },[dispatch, id, qty])

    const removeItemHandler = (id) =>{
        dispatch(removeItem(id))
        history.push('/cart')
    }

    const checkoutHandler = () => {
        history.push('/login?redirect=shipping')
    }

    const handleSelectControl=(id, qty) =>{
        dispatch(addCartItem(id, qty))
        history.push('/cart')
    }

    return (
            <Row >
                <Col md={8}>
                    <h1>Shoping Cart</h1>
                    {
                        cartItems.length === 0 
                        ? 
                        <Message>Your Cart is empty. <Link to='/'>Go back</Link> </Message> 
                        :
                        <ListGroup variant='flush'>
                            {
                                cartItems.map(item => (
                                    <ListGroup.Item key ={item.id}>
                                        <Row>
                                            <Col md={2}><Image src={item.image} fluid rounded /></Col>
                                            <Col md={3}><Link to ={`/product/${item.id}`}>{item.name}</Link></Col>
                                            <Col md={2}>{item.price}</Col>
                                            <Col md={2}>
                                                
                                                <Form.Control 
                                                    as='select'
                                                    value = {item.qty}
                                                    style={{padding:'0 10%'}}
                                                    onChange={(e)=> handleSelectControl(item.id, Number(e.target.value))}>
                                                        {[...Array(item.countInStock).keys()].map(x =>(
                                                            <option key={x+1} value={x+1}>
                                                                {x+1}
                                                            </option>
                                                        ))}
                                                </Form.Control>
                                                
                                            </Col>
                                            <Col>
                                                <Button type='button' variant='light' onClick={()=> removeItemHandler(item.id)}><i className='fas fa-trash'></i></Button>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                ))
                            }
                        </ListGroup>
                    }
                </Col>
                <Col md={4}>
                    <Card style={{margin:'13px 0'}}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h3>
                                    Subtotal ({cartItems.reduce((acc, itm)=> acc + itm.qty  ,0)}) items
                                </h3>
                                <h4>{cartItems.reduce((acc, itm) => acc + itm.qty * itm.price,0  ).toFixed(2)}</h4>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button type='button' className='btn-block' onClick={checkoutHandler} disabled={cartItems.length === 0 }>Proceed to checkout</Button>
                            </ListGroup.Item>

                        </ListGroup>
                    </Card>
                </Col>
            </Row>
    )
}
export default CartPage