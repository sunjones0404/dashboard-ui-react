import React from 'react'
import ScannersItem from './ScannersItem'

export default function Scanners(props) {
  return (
    <ul className='scan-summary__scanners'>
      <p className='scan-summary__subtitle'>Scanners:</p>
      {props.scanners.map((scanner) => {
        return <ScannersItem scanner={scanner} key={scanner} />
      })}
    </ul>
  )
}
