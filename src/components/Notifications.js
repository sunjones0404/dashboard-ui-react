import React from 'react'
import NotificationsItem from './NotificationsItem'

export default function Notifications(props) {
  return (
    <ul id='notifications' className='notifications'>
      {props.notifications.map((item) => {
        return (
          <NotificationsItem
            date={item.date}
            message={item.message}
            read={item.read}
            key={item.id}
          />
        )
      })}
    </ul>
  )
}
