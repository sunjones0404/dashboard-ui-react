import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function UserDetails(props) {
  return (
    <div id='user' className='user'>
      <p>
        <strong>Your Details:</strong>
      </p>
      <br />
      <p className='user__name'>
        <FontAwesomeIcon icon={['far', 'user']} className='far' /> {props.name}
      </p>
      <p className='user__email'>
        <FontAwesomeIcon icon={['far', 'envelope']} className='far' />{' '}
        {props.email}
      </p>
    </div>
  )
}
