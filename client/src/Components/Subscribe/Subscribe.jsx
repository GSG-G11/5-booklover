import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
  return (
    <div className='subscribe'>
      <div className='container subscribe'>
        <div className='newsletter'>Subscribe our newsletter for newest books updates</div>
        <div>
          <input type="text" placeholder='Type your email here' className='input-sub' />
          <button className='btn-sub'>SUBSCRIBE</button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe