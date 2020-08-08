import React from 'react'
import Notifications from './Notifications'

export default function Header(props) {
  return (
    <header className='header'>
      <div id='welcome' className='welcome'>
        <p>Hi {props.firstName}, here's your dashboard</p>
      </div>
      <div className='notifications__wrapper'>
        <div id='notification-text' className='notifications__text'>
          <p>
            You have{' '}
            <span
              className='notifications__bubble'
              onClick={props.toggleNotifications}
            >
              {props.notifications.length}
            </span>{' '}
            notifications
          </p>
        </div>
        {props.showNotifications ? (
          <Notifications notifications={props.notifications} />
        ) : null}
      </div>
    </header>
  )
}
