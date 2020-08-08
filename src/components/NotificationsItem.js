import React from 'react'
import moment from 'moment'

export default function NotificationsItem(props) {
  return (
    <li className={`notifications__item ${props.read ? 'read' : ''}`}>
      <p className='notifications__date'>{moment(props.date).fromNow()}</p>
      <p>{props.message}</p>
    </li>
  )
}
