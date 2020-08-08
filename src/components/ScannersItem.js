import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function NotificationsItem(props) {
  return (
    <li className='scan-summary__scanners-item'>
      <FontAwesomeIcon icon={['far', 'dot-circle']} className='far' />{' '}
      {props.scanner}
    </li>
  )
}
