import React from 'react'
import {Spinner} from 'react-bootstrap'

const Loader = () => {
    return (
        <Spinner
        animation='border'
        role='status'
        style={
            {
                width:'70px',
                height:'70px',
                margin:'25vh auto',
                display:'block',
            }
        }
        >
            <Spinner className='sr-only'>
            </Spinner>
            
        </Spinner>
    )
}
export default Loader