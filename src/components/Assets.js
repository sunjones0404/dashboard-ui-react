import React from 'react'
import AssetsItem from './AssetsItem'

export default function Assets(props) {
  return (
    <div className='assets__wrapper'>
      <p className='assets__title'>Assets</p>
      <div id='assets' className='assets'>
        {props.assets.map((asset) => (
          <AssetsItem
            id={asset.id}
            name={asset.name}
            description={asset.description}
            created={asset.created}
            scanCount={asset.scanCount}
            key={asset.id}
          />
        ))}
      </div>
    </div>
  )
}
