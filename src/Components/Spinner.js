import React from 'react'
import Loader from './Loader.gif'

const spinner = () => {
    return (
        <div className='text-center'>
          <img src={Loader} alt="" />
        </div>
    )
}
export default spinner