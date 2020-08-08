import React from 'react'
import Vulnerabilities from './Vulnerabilities'
import Assets from './Assets'

export default function Content(props) {
  return (
    <div className='content'>
      <Vulnerabilities
        vulnerabilitiesCount={props.vulnerabilitiesCount}
        vulnerabilities={props.vulnerabilities}
        assets={props.assets}
      />
      <Assets assets={props.assets} />
    </div>
  )
}
