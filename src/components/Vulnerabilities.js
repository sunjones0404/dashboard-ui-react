import React from 'react'
import VulnerabilitiesItem from './VulnerabilitiesItem'

export default function Vulnerabilities(props) {
  return (
    <div className='vulnerabilities__wrapper'>
      <p className='vulnerabilities__title'>
        Vulnerabilities
        <span id='vulnerabilities-count' className='vulnerabilities__count'>
          {props.vulnerabilitiesCount}
        </span>
      </p>
      <div id='vulnerabilities' className='vulnerabilities'>
        {props.vulnerabilities.map((vulnerability) => {
          return (
            <VulnerabilitiesItem
              key={vulnerability.id}
              severity={vulnerability.severity}
              name={vulnerability.name}
              id={vulnerability.id}
              cvssBaseScore={vulnerability.cvssBaseScore}
              description={vulnerability.description}
              solution={vulnerability.solution}
              references={vulnerability.references}
              affectedAssets={vulnerability.affectedAssets}
              assets={props.assets}
            />
          )
        })}
      </div>
    </div>
  )
}
