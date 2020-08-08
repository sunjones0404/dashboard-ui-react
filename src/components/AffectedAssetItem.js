import React from 'react'

export default function AffectedAssetItem(props) {
  return (
    <div className='vulnerabilities__asset-wrapper'>
      <div className='vulnerabilities__asset'>{props.name}</div>
      <div className='vulnerabilities__asset-summary'>
        <p>Asset Name: {props.name}</p>
        <p>Description: {props.description}</p>
        <p>Scan Count: {props.scanCount}</p>
      </div>
    </div>
  )
}
