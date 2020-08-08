import React from 'react'
import moment from 'moment'

export default function AssetsItem(props) {
  return (
    <div className='assets__item'>
      <span className='assets__id'>ID: {props.id}</span>
      <p className='assets__item-text'>
        Asset Name: <span>{props.name}</span>
      </p>
      <p className='assets__item-text'>
        Description: <span>{props.description}</span>
      </p>
      <p className='assets__item-text'>
        Created:{' '}
        <span>{moment(props.created).format('MMM Do YYYY, h:mma')}</span>
      </p>
      <p className='assets__item-text'>
        Scan Count: <span>{props.scanCount}</span>
      </p>
    </div>
  )
}
